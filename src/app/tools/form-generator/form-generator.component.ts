import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { tap, distinctUntilChanged, debounce, debounceTime } from 'rxjs/operators';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from 'src/app/_shared/ui-form/services/kendraio.form.service'

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  isLoading = false;
  schemaform: FormGroup;
  formChanges$: Observable<any>;
  private subscription: Subscription;
  model: any = {
    bandArtist: 'The Forest',
    recordingTitle: 'Born in the morning',
    isrc: 'YA9N4nsAxZo'
  };
  egModel: any = this.model;

  uiSchemaDefault: any = {
    "isrc": {
      "ui:disabled": true,
      "ui:placeholder": "Enter your ISRC"
    },
    "bandArtist": {
      "ui:disabled": false,
      "ui:placeholder": "Enter  Version Type",
      "ui:type": "datepicker",
      "ui:required": true
    },
    "recordingTitle": {
      "ui:type": "money"
    },
    "pDate": {
      "ui:type": "percentage"
    }
  };

  formConfig: any;
  options: FormlyFormOptions = {};
  jsonSchema: any;
  uiSchema: any;
  fields: FormlyFieldConfig[];
  isValid: boolean;
  formDescription: string;
  formLabel: string;

  constructor(
    private fb: FormBuilder,
    private formService: KendraioFormService,
    private formlyJsonschema: FormlyJsonschema,
  ) {
    this.createForm();
    this.formChanges$ = this.schemaform.valueChanges;
  }

  ngOnInit() {

    this.subscription = this.formChanges$.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      tap(() => {
        this.isLoading = true;
      })
    )
      // .debounceTime(2000)
      .subscribe(newVal => {
        this.generateForm();
        this.isLoading = false;
      });

  }

  generateForm() {
    let uiSchema: any = {};
    let jsonSchema: any = {};
    this.isValid = true;
    jsonSchema = this.isValidJsonSchema(jsonSchema);
    this.model = JSON.parse(this.schemaform.get('model').value);
    uiSchema = this.isValidJson(uiSchema);

    if (this.isValid) {
      let i = 0;
      i = this.uiTypeMapper(uiSchema, jsonSchema, i);

      this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
      this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
      this.formDescription = this.formConfig.templateOptions.description;
      this.formLabel = this.formConfig.templateOptions.label;
    }

  }

  private uiTypeMapper(uiSchema: any, jsonSchema: any, i: number) {
    try {
      Object.keys(uiSchema).forEach(function (uiKey) {
        Object.keys(jsonSchema.properties).forEach(function (schemaKey) {
          if ((uiKey === schemaKey) && uiSchema[uiKey]['ui:type']) {
            jsonSchema.properties[schemaKey].type = uiSchema[uiKey]['ui:type'];
          } else {
            jsonSchema.properties[schemaKey].type = jsonSchema.properties[schemaKey].type;
          }
        });
        i++;
      });
    }
    catch (e) {
    }
    return i;
  }

  private isValidJson(uiSchema: {}) {
    try {
      uiSchema = JSON.parse(this.schemaform.get('UISchema').value);
    } catch (e) {
      // this.isValid = false;
      if (Object.keys(uiSchema).length === 0) {
        // return;
      } else {
        this.isValid = false;
      }
    }
    return uiSchema;
  }


  private isValidJsonSchema(jsonSchema: {}) {
    try {
      this.isValid = true;
      jsonSchema = JSON.parse(this.schemaform.get('JSONSchema').value);
    } catch (e) {
      this.isValid = false;
      if (Object.keys(jsonSchema).length === 0) {
      } else {
        this.isValid = false;
      }
    }
    return jsonSchema;
  }

  createForm() {
    this.schemaform = this.fb.group({
      JSONSchema: [''],
      UISchema: [],
      model: [],
    });
  }

}


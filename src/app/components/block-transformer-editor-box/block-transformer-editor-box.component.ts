import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-block-transformer-editor-box',
  templateUrl: './block-transformer-editor-box.component.html',
  styleUrls: ['./block-transformer-editor-box.component.scss']
})
export class BlockTransformerEditorBoxComponent implements OnInit {

  mappingEditorOptions = {
    baseUrl: 'blocks-builder1',
    theme: 'vs',
    language: 'text',
    minimap: {
      enabled: false
    },
    lineNumbers: 'off',
    scrollBeyondLastLine: false,
    automaticLayout: true
  };
  editorOptions = {
    baseUrl: 'blocks-builder',
    theme: 'vs',
    language: 'javascript',
    minimap: {
      enabled: false
    },
    lineNumbers: 'on',
    scrollBeyondLastLine: false,
    automaticLayout: true
  };

  @Input() block;
  @Output() updateBlock = new EventEmitter();
  mappingModel = 'data';
  codeModel = '';

  constructor() { }

  ngOnInit() {
    this.mappingModel = get(this.block, 'inputMapping', 'data');
    this.codeModel = get(this.block, 'code', '');
  }

  getUpdatedModel() {
    return {
      ...this.block,
      code: this.codeModel,
    };
  }

}

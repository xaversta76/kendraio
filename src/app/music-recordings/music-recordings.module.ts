import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';

import { MatGridListModule, MatCardModule } from '@angular/material';

import { MusicRecordingsRoutingModule } from './music-recordings-routing.module';
import { IndexComponent } from './index/index.component';
import { MusicRecordingsEditComponent } from './music-recordings-edit/music-recordings-edit.component';
import { MusicRecordingsDetailComponent } from './music-recordings-detail/music-recordings-detail.component';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import {AgGridModule} from 'ag-grid-angular';

import {DialogDataExampleDialog} from './index/index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { ButtonRendererComponent } from './button-renderer.component';

@NgModule({
  declarations: [
    IndexComponent, 
    MusicRecordingsEditComponent, 
    MusicRecordingsDetailComponent,
    DialogDataExampleDialog,
    // ButtonRendererComponent
  ],
  imports: [
    CommonModule,
    MusicRecordingsRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        DynamicFormsMaterialUIModule,
        AppMaterialModule,
        AgGridModule.withComponents(
          []
      ),
      FlexLayoutModule
  ],
  entryComponents: [DialogDataExampleDialog]
})
export class MusicRecordingsModule { }

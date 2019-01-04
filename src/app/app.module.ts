import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, Type } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ImportPageComponent } from './pages/import-page/import-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { VisualisePageComponent } from './pages/visualise-page/visualise-page.component';
import { AdaptersPageComponent } from './pages/adapters-page/adapters-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ConfirmAppResetDialogComponent } from './dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ImportProgressDialogComponent } from './dialogs/import-progress-dialog/import-progress-dialog.component';
import { AddNewNodeDialogComponent } from './dialogs/add-new-node-dialog/add-new-node-dialog.component';
import { NodeEditPageComponent } from './pages/node-edit-page/node-edit-page.component';
import { NodeTeaserComponent } from './components/node-teaser/node-teaser.component';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { EditPhotoFormComponent } from './forms/edit-photo-form/edit-photo-form.component';
import { ReplaceImageUrlDialogComponent } from './dialogs/replace-image-url-dialog/replace-image-url-dialog.component';
import { EditRinProjectFormComponent } from './forms/edit-rin-project-form/edit-rin-project-form.component';
import { InclusionPreviewComponent } from './components/inclusion-preview/inclusion-preview.component';
import { PersonPreviewComponent } from './components/person-preview/person-preview.component';
import { EditPersonFormComponent } from './forms/edit-person-form/edit-person-form.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { DraggableDirective } from './directives/draggable.directive';
import { EditAudioFormComponent } from './forms/edit-audio-form/edit-audio-form.component';
import { WaveformComponent } from './components/waveform/waveform.component';
import { ClipListComponent } from './components/clip-list/clip-list.component';
import { DocsListPageComponent } from './pages/docs-list-page/docs-list-page.component';
import { SchemaListPageComponent } from './pages/schema-list-page/schema-list-page.component';
import { AddDocDialogComponent } from './dialogs/add-doc-dialog/add-doc-dialog.component';
import { DocEditPageComponent } from './pages/doc-edit-page/doc-edit-page.component';
import { DocEditFormComponent } from './forms/doc-edit-form/doc-edit-form.component';
import { ImageInputControlComponent } from './form-controls/image-input-control/image-input-control.component';
import { TextInputFormControlComponent } from './form-controls/text-input-form-control/text-input-form-control.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { NgxTaggerModule } from 'ngx-tagger';
import { SchemaRepositoryService } from './services/schema-repository.service';
import { DocumentRepositoryService } from './services/document-repository.service';
import { DropboxPageComponent } from './pages/dropbox-page/dropbox-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DocsListPageComponent,
    SchemaListPageComponent,
    AddDocDialogComponent,
    DocEditPageComponent,
    DocEditFormComponent,
    ImageInputControlComponent,
    TextInputFormControlComponent,
    DashboardPageComponent,
    ImportPageComponent,
    UploadPageComponent,
    VisualisePageComponent,
    AdaptersPageComponent,
    SettingsPageComponent,
    UserPageComponent,
    ConfirmAppResetDialogComponent,
    ObjectKeysPipe,
    ImportProgressDialogComponent,
    AddNewNodeDialogComponent,
    NodeEditPageComponent,
    NodeTeaserComponent,
    ConfirmDeleteDialogComponent,
    EditPhotoFormComponent,
    ReplaceImageUrlDialogComponent,
    EditRinProjectFormComponent,
    InclusionPreviewComponent,
    PersonPreviewComponent,
    EditPersonFormComponent,
    AuthCallbackComponent,
    DraggableDirective,
    EditAudioFormComponent,
    WaveformComponent,
    ClipListComponent,
    DropboxPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxTaggerModule
  ],
  entryComponents: [
    AddDocDialogComponent,
    ConfirmAppResetDialogComponent,
    ImportProgressDialogComponent,
    AddNewNodeDialogComponent,
    ConfirmDeleteDialogComponent,
    ReplaceImageUrlDialogComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (schemaRepo: SchemaRepositoryService) => () => schemaRepo.init(),
      deps: [ SchemaRepositoryService ]
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (docsRepo: DocumentRepositoryService) => () => docsRepo.init(),
      deps: [ DocumentRepositoryService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

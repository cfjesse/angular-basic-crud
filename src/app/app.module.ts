import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './modules/material/material.module';
import { MasterDetailsComponent } from './pages/master-details/master-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeopleGetInterceptor } from './interceptor/request.interceptor';
import { InlineFormComponent } from './shared/inline-form/inline-form.component';
import { FormsModule } from '@angular/forms';
import { PeopleService } from './services/form-state.service';
import { CreatePersonComponent } from './pages/create-person/create-person.component';
import { CancelWarningComponent } from './modals/cancel-warning/cancel-warning.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailsComponent,
    InlineFormComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ }),
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PeopleGetInterceptor, multi: true },
    PeopleService,
    ModalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CancelWarningComponent
  ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule }from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { DataDrivenComponent } from './form/data-driven/data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TemplateDrivenComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

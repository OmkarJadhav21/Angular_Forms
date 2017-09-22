import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule }from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { DataDrivenComponent } from './form/data-driven/data-driven.component';
import { PipeComponent } from './pipe/pipe.component';
import { AsciiPipePipe } from './pipe/ascii-pipe.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    PipeComponent,
    AsciiPipePipe,
    FilterPipe,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

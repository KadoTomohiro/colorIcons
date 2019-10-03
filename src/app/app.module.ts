import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ColorScreenComponent} from './color-screen/color-screen.component';
import {AppRoutingModule} from './app-routing.module';
import {ColorIconComponent} from './color-icon/color-icon.component';
import {FormComponent} from './form/form.component';
import {IconInfoComponent} from './icon-info/icon-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorScreenComponent,
    ColorIconComponent,
    FormComponent,
    IconInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

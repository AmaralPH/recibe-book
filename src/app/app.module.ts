import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule} from "@angular/common/http";
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

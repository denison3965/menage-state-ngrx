import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app : appReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

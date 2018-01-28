import { GoodByeComponent } from './good-bye/good-bye.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Route } from '@angular/compiler/src/core';
import { HelloComponent } from './hello/hello.component';
import { NotexistComponent } from './notexist/notexist.component';
import { routing } from './module.routing';



@NgModule({
  declarations: [
    AppComponent,
    GoodByeComponent,
    HelloComponent,
    NotexistComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

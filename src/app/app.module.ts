import { GoodByeComponent } from './good-bye/good-bye.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Route } from '@angular/compiler/src/core';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'goodbye', component: GoodByeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GoodByeComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

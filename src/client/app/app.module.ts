import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Home } from './home';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ])
  ],
  declarations: [ AppComponent, Home ],
  exports: [ AppComponent ]
})
export class AppModule {}

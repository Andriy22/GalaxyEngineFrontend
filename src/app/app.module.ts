import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponentEditorComponent } from './pages/admin-component-editor/admin-component-editor.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminPageComponentListComponent } from './components/admin-page-component-list/admin-page-component-list.component';
import { AdminPageConstructorComponent } from './pages/admin-page-constructor/admin-page-constructor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponentEditorComponent,
    AdminSidebarComponent,
    AdminPageComponentListComponent,
    AdminPageConstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

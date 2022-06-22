import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponentEditorComponent} from "./pages/admin-component-editor/admin-component-editor.component";
import {AdminPageConstructorComponent} from "./pages/admin-page-constructor/admin-page-constructor.component";
import {IndexComponent} from "./pages/index/index.component";

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "admin/page-constructor/:id", component : AdminPageConstructorComponent},
  {path: "admin/component-editor/:id", component: AdminComponentEditorComponent},
  {path: "**", redirectTo: "admin/page-constructor/null"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

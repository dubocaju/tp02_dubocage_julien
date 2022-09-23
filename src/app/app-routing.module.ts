import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ResultFormComponent } from "./result-form/result-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/client-form', pathMatch: 'full' },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'result', component: ResultFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

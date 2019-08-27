import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  { path: 'crudOperation', component: CrudOperationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

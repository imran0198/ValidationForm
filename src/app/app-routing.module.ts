import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"c",component:CreateaccountComponent},
  {path:"l",component:LoginComponent},
  {path:"a",component:AddEmployeeComponent},
  {path:"e",component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

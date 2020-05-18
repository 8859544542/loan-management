import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { CalculateEmiComponent } from './calculate-emi/calculate-emi.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';


const routes: Routes = [
  {path:'loanrequest', component:LoanrequestComponent},
  {path:'calculateemi', component:CalculateEmiComponent},
  {path:'loandetails',component:LoandetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoanrequestComponent,CalculateEmiComponent,LoandetailsComponent]

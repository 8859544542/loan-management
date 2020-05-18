import { Component, OnInit } from '@angular/core';
import { LoanRequestServiceService } from '../service/loan-request-service.service';
import { LoanRequest } from '../model/loan-request';
import { DetachedRouteHandle } from '@angular/router';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {
  
  
  service:LoanRequestServiceService;
  constructor(service:LoanRequestServiceService) {
    this.service=service;
   }

  ngOnInit(): void {
  }


  addedLoan:LoanRequest=null;
     
  addLoanRequest(form:any){
    let details=form.value;
    let accountId=details.accountId;
    let amount=details.amount;
    let tenure=details.tenure;
    let creditScore=details.creditScore;
    let loanType=details.loanType;
    this.addedLoan=new LoanRequest();
    this.addedLoan.accountId=accountId;
    this.addedLoan.amount=amount;
    this.addedLoan.tenure=tenure;
    this.addedLoan.creditScore=creditScore;
    this.addedLoan.loanType=loanType;
    
    
    
    let result=this.service.addLoanRequest(this.addedLoan); // adding to the store
    result.subscribe((loanrequest:LoanRequest)=>{
      this.addedLoan=loanrequest;
    },
    err=>{
    console.log("err="+err);
    } );
    form.reset();
    
  }


}

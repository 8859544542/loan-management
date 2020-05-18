import { Component, OnInit } from '@angular/core';
import { LoanRequestServiceService } from '../service/loan-request-service.service';
import { LoanRequest } from '../model/loan-request';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {


  loanRequest:LoanRequest;

  service:LoanRequestServiceService;

  orderByField:string=null;

  constructor(service:LoanRequestServiceService) {
    this.service=service;
    }

  ngOnInit(): void {
  }

  findLoanRequest(id:number){
    let result:Observable<LoanRequest>=this.service.findloanRequestById(id)
    result.subscribe(loan=>{
        this.findLoanRequest(id);
    },err=>{
     console.log(`err in finding loanrequest =${err}`);
    })
      }



}

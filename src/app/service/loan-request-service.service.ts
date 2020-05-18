import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanRequest } from '../model/loan-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestServiceService {
  client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
}


baseLoanRequestUrl="http://localhost:8080/loanrequests";


addLoanRequest(loan:LoanRequest): Observable<LoanRequest>{
  let url=this.baseLoanRequestUrl+"/add";
  let result:Observable<LoanRequest>= this.client.post<LoanRequest>(url,loan);
  return result;
  }

  findloanRequestById(id:number):Observable<LoanRequest>{
    let url=this.baseLoanRequestUrl+'/get/'+id;
    let observable:Observable<LoanRequest> =this.client.get<LoanRequest>(url);
    return observable;  
  }

}

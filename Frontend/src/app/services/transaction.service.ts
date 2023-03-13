import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlatform } from '../Platform';
import { Observable } from 'rxjs';
import { ITransaction } from '../Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  ID: number = -1

  private domain: string = "http://localhost:3000"
  private url: string =  this.domain + "/api/v1/platform/"

  getTransactions(platformID: number): Observable<ITransaction[]>{
    return this.http.get<ITransaction[]>(this.url + platformID + "/transaction")
  }

  getTransaction(platformID: number, transactionID: number): Observable<ITransaction>{
    return this.http.get<ITransaction>(this.url + platformID + "/transaction/" + transactionID)
  }


}
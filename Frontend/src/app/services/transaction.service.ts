import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlatform } from '../Platform';
import { Observable } from 'rxjs';
import { ITransaction } from '../Transaction';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  ID: number = -1

  private domain: string = "http://localhost:3000"
  private url: string =  this.domain + "/api/v1/platform/"

  public getTransactions(platformID: number): Observable<ITransaction[]>{
    return this.http.get<ITransaction[]>(this.url + platformID + "/transaction")
  }

  public getTransaction(platformID: number, transactionID: number): Observable<ITransaction>{
    return this.http.get<ITransaction>(this.url + platformID + "/transaction/" + transactionID)
  }

  public addTransaction(platformID: number, Value: number, date: String){
    let body = {
      date: date,
      value: Value
    } 

    return this.http.post<ITransaction>(this.url + platformID + "/transaction", body)
  }


}
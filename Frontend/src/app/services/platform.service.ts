import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlatform } from '../Platform';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/api/v1/platform/"
 

  getPlatforms(): Observable<IPlatform[]>{
    return this.http.get<IPlatform[]>(this.url)
  }
  
  getPlatform(Platform_ID: number): Observable<IPlatform>{
    return this.http.get<IPlatform>(this.url + Platform_ID)
  }

  getPlatformD(Platform_ID: number): any{
    return this.http.get(this.url + 1)
  }


}






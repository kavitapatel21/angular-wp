import { Injectable } from '@angular/core';
import { Observable, onErrorResumeNext } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  signup(data: any): Observable<any> {
    const queryParams = `?username=${data.runame}&email=${data.remail}&password=${data.rpassword}`;
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Basic ` + btoa('recovr123:recovr123'),
        }
      )
    };
    return this.http.post('http://192.168.1.39/recovr/wp-json/wp/v2/users' + queryParams, {}, httpOptions)
  }

  signin(data: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Basic ` + btoa('recovr123:recovr123'),
        }
      )
    };
    return this.http.get('http://192.168.1.39/recovr/wp-json/wp/v2/users',httpOptions)
  }
}

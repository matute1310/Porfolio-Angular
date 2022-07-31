import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginDto } from 'src/models/LoginDto';
import { urlConfig } from '../urlConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(urlConfig.baseUrl+"login", credentials).pipe(
      tap((response: Boolean) =>{
        sessionStorage.setItem("user", credentials.email);
      })
    );
  }


  public logout(){
    sessionStorage.removeItem("user")
  }

  public isUserLogged():boolean{
    return sessionStorage.getItem("user") !== null;
  }
}

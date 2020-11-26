import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

const API_URL = 'https://fabrica-admin-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UsuarioService) { }

  authenticate(email: string, password: string) {

    return this.http
      .post(
        API_URL + '/auth', 
        { email, password }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        const authToken = res.body["token"];
        const refreshToken = res.body["refreshToken"];
        const clientId = res.body["_id"];
        this.userService.setClientId(clientId);
        this.userService.setRefreshToken(refreshToken);
        this.userService.setToken(authToken);
        console.log(`User ${email} authenticated with token ${authToken}`);
      }));
  }

  refreshAuthenticate(refreshToken: string){
    return this.http
      .post(
        API_URL + '/auth/refresh-token',
        {refreshToken},
        {observe: 'response'}
      ).pipe(tap(res =>{
          if(res.status == 200){
            const authToken = res.body["token"];
            const refreshToken = res.body["refreshToken"];
            this.userService.setRefreshToken(refreshToken);
            this.userService.setToken(authToken);
          }else {
            this.userService.removeToken;
          }
      }))
  }
}
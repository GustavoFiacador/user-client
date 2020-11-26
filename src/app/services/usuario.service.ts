import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';

const CLIENT_ID = 'client_id';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl = 'https://fabrica-admin-api.herokuapp.com/user/';
 
  constructor(private snackBar: MatSnackBar,
    private http: HttpClient, private tokenService: TokenService) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  //Da post no baseUrl
  cadastroUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  setRefreshToken(refreshToken: string){
    this.tokenService.setRefreshToken(refreshToken);
  }

  removeToken(){
    this.tokenService.removeToken;
    this.tokenService.removeRefreshToken;
  }

  setClientId(clientId:string){
    window.localStorage.setItem(CLIENT_ID, clientId);
  }

  getClientId(){
    return window.localStorage.getItem(CLIENT_ID);
  }
}

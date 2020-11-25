import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl = 'http://localhost:3000/usuario';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient, private tokenService: TokenService) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  cadastroUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  setRefreshToken(refreshToken: string){
    this.tokenService.setRefreshToken(refreshToken);
  }
}

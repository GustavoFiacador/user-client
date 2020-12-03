import { UsuarioService } from './../../services/usuario.service';
import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/token/token.service';
import { CadProjectComponent } from '../components/dialogs/cadastro/cad-project/cad-project.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName = "";
  constructor(public dialog: MatDialog, private tokenService: TokenService, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    if (!(this.tokenService.hasToken())) {
      this.router.navigateByUrl('/');
      this.tokenService.removeToken();
      this.tokenService.removeRefreshToken();
      var aFirstName = this.usuarioService.getClientName().split(' ', 1)
      this.firstName = aFirstName[1];
    }

  }

  sairClick(): void {
    //this.usuarioService.logoutUsuario(this.tokenService.getRefreshToken());
    //Temporario até validarmos o token direito
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }
  cadastraProjeto(): void {
    const dialogRef = this.dialog.open(CadProjectComponent, {
      width: '968px',
      height: '755px'
    });
  }
}


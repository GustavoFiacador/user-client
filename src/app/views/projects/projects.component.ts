import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/token/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog, private tokenService: TokenService, private router: Router, private usuarioService: UsuarioService) {
    if (!(this.tokenService.hasToken())) {
      this.router.navigateByUrl('/');
    }

  }

  ngOnInit(): void {

  }
  sairClick(): void {
    // this.usuarioService.logoutUsuario(this.tokenService.getRefreshToken());
    //Temporario até validarmos o token direito
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

}
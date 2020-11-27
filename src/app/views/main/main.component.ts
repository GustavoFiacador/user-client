import { Router } from '@angular/router';
import { LoginComponent } from '../components/dialogs/login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroFComponent } from '../components/dialogs/cadastro/cadastro-f/cadastro-f.component';
import { TokenService } from 'src/app/token/token.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }


  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '968px',
      height: '755px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openCadastro(): void {
    const dialogRef = this.dialog.open(CadastroFComponent, {
      width: '968px',
      height: '755px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}

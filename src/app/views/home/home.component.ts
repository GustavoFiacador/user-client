import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadProjectComponent } from '../components/dialogs/cadastro/cad-project/cad-project.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName = "Gustavo";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  cadastraProjeto(): void {
    const dialogRef = this.dialog.open(CadProjectComponent, {
      width: '968px',
      height: '755px'
    });
  }
}

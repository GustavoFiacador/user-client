import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MainComponent } from 'src/app/views/main/main.component';
import { CadastroSComponent } from '../cadastro-s/cadastro-s.component';


@Component({
  selector: 'app-cadastro-f',
  templateUrl: './cadastro-f.component.html',
  styleUrls: ['./cadastro-f.component.css']
})
export class CadastroFComponent {

  constructor(public dialogRef: MatDialogRef<MainComponent>, public dialog: MatDialog) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  tellFormControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  cnpjFormControl = new FormControl('', [
    Validators.required,
  ]);
  nomeEFormControl = new FormControl('', [
    Validators.required,
  ]);
  openCadastro(): void {
    const dialogRef = this.dialog.open(CadastroSComponent, {
      width: '968px',
      height: '755px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
    this.dialogRef.close();
  }
}

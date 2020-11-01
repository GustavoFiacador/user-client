import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainComponent } from 'src/app/views/main/main.component';
import { CadastroTComponent } from '../cadastro-t/cadastro-t.component';



@Component({
  selector: 'app-cadastro-s',
  templateUrl: './cadastro-s.component.html',
  styleUrls: ['./cadastro-s.component.css']
})
export class CadastroSComponent {
  constructor(public dialogRef: MatDialogRef<MainComponent>, public dialog: MatDialog) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,

  ]);
  passCFormControl = new FormControl('', [
    Validators.required,
  ]);
  openCadastro(): void {
    const dialogRef = this.dialog.open(CadastroTComponent, {
      width: '968px',
      height: '755px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
    this.dialogRef.close();
  }
}

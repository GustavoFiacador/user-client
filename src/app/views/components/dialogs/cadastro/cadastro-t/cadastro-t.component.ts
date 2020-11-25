import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainComponent } from 'src/app/views/main/main.component';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-cadastro-t',
  templateUrl: './cadastro-t.component.html',
  styleUrls: ['./cadastro-t.component.css']
})
export class CadastroTComponent {

  constructor(public dialogRef: MatDialogRef<MainComponent>, public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  openLogin(): void {
    this.dialogRef.close();

    this.dialog.open(LoginComponent, {
      width: '968px',
      height: '755px'
    });
  }
}

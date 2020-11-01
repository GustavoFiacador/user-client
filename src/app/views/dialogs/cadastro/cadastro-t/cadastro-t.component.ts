import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainComponent } from 'src/app/views/main/main.component';

@Component({
  selector: 'app-cadastro-t',
  templateUrl: './cadastro-t.component.html',
  styleUrls: ['./cadastro-t.component.css']
})
export class CadastroTComponent {

  constructor(public dialogRef: MatDialogRef<MainComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { MainComponent } from './../../main/main.component';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  constructor(
    public dialogRef: MatDialogRef<MainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
}


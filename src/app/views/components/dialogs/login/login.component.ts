import { TokenService } from 'src/app/token/token.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../../auth/auth.service';
import { MainComponent } from '../../../main/main.component';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  email: string = "";
  senha: string = "";

  constructor(
    public dialogRef: MatDialogRef<MainComponent>,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService) { }

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
  loginClick(): void {
    this.authService.authenticate(this.email, this.senha)
    this.router.navigateByUrl('/inicio');
    this.dialogRef.close();
  }
}


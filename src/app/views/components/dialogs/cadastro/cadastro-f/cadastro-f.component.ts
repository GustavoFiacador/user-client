import { UsuarioService } from './../../../../../services/usuario.service';
import { Usuario } from './../../../../../models/usuario.model';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MainComponent } from 'src/app/views/main/main.component';
import { CadastroTComponent } from '../cadastro-t/cadastro-t.component';


@Component({
  selector: 'app-cadastro-f',
  templateUrl: './cadastro-f.component.html',
  styleUrls: ['./cadastro-f.component.css']
})
export class CadastroFComponent {

  constructor(public dialogRef: MatDialogRef<MainComponent>, public dialog: MatDialog, public UsuarioService: UsuarioService) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  usuario: Usuario = {
    name: "",
    email: "",
    password: "",
    password_repeat: "",
    role: "",
    personType: "",
    cpf: "",
    cnpj: "",
    phone: ""
  }

  //#region  formControl
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
  passFormControl = new FormControl('', [
    Validators.required,

  ]);
  passCFormControl = new FormControl('', [
    Validators.required,
  ]);
  //#endregion
  cadastraUsuario(): void {
    this.UsuarioService.cadastroUsuario(this.usuario).subscribe(() => {
      this.UsuarioService.showMessage('Cadastro Efetuado!')
      this.openCadastro()
    })
  }
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

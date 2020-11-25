import { ProjectService } from './../../../../../services/project.service';
import { ProjectsComponent } from 'src/app/views/projects/projects.component';
import { HomeComponent } from './../../../../home/home.component';
import { FormControl, Validators } from '@angular/forms';
import { Project } from './../../../../../models/project.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-project',
  templateUrl: './cad-project.component.html',
  styleUrls: ['./cad-project.component.css']
})
export class CadProjectComponent {

  constructor(public dialogRef: MatDialogRef<HomeComponent, ProjectsComponent>,
    public projectService: ProjectService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  project: Project = {
    name: "",
    description: ""
  }
  //#region formControl
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  describeFormControl = new FormControl('', [
    Validators.required,
  ]);
  //#endregion
  cadastrarProject(): void {
    this.projectService.cadastroProject(this.project).subscribe(() => {
      this.projectService.showMessage('Cadastro Efetuado!');
      this.onNoClick();
    })
  }
}

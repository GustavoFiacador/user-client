import { Project } from './../models/project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'https://fabrica-admin-api.herokuapp.com/project/';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  //Da post no baseUrl
  cadastroProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, project)
  }
}

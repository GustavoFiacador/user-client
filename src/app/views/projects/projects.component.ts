import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadProjectComponent } from '../components/dialogs/cadastro/cad-project/cad-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
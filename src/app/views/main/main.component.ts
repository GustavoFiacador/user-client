import { LoginComponent } from './../dialogs/login/login.component';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(public dialog: MatDialog) { }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '968px',
      height: '755px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
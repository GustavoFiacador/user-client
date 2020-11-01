import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/dialogs/login/login.component';
import { MainComponent } from './views/main/main.component';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CadastroFComponent } from './views/dialogs/cadastro/cadastro-f/cadastro-f.component';
import { CadastroSComponent } from './views/dialogs/cadastro/cadastro-s/cadastro-s.component';
import { CadastroTComponent } from './views/dialogs/cadastro/cadastro-t/cadastro-t.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CadastroFComponent,
    CadastroSComponent,
    CadastroTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MatButtonModule],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

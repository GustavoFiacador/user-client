import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/components/dialogs/login/login.component';
import { MainComponent } from './views/main/main.component';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card';

import { CadastroFComponent } from './views/components/dialogs/cadastro/cadastro-f/cadastro-f.component';
import { CadastroTComponent } from './views/components/dialogs/cadastro/cadastro-t/cadastro-t.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { CadProjectComponent } from './views/components/dialogs/cadastro/cad-project/cad-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CadastroFComponent,
    CadastroTComponent,
    HomeComponent,
    ProjectsComponent,
    FooterComponent,
    CadProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule
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

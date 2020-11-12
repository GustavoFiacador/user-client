import { MainComponent } from './views/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "inicio",
    component: HomeComponent
  },
  {
    path: "projetos",
    component: ProjectsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

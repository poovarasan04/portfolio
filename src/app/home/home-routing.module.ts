import { NgModule } from '@angular/core';
import { RouterModule, Routes, withRouterConfig } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"",
    component: MainComponent,
    children: [
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"about",
        component: AboutComponent
      },
      {
        path:"contact",
        component: ContactComponent
      },
      {
        path:"projects",
        component: ProjectsComponent
      },
      {
        path: "",
        redirectTo: "",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "",
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

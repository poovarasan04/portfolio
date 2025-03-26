import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: "main",
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "main",
    pathMatch: "full"
  }
];

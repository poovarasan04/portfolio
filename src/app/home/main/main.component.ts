import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  readonly skills = [
    {
      icon: "fa-brands fa-angular",
      title: "Angular",
      color: "#DD0031"
    },
    {
      icon: "fa-brands fa-node",
      title: "Node.js",
      color: "#68A063"
    },
    {
      icon: "fa-solid fa-database",
      title: "MySQL",
      color: "#B197FC"
    },
    {
      icon: "fa-brands fa-aws",
      title: "AWS",
      color: "#FF9900"
    },
    {
      icon: "fa-brands fa-microsoft",
      title: "Azure",
      color: "#0078D4"
    },

    {
      title: 'HTML',
      icon: 'fa-brands fa-html5',
      color: '#E44D26'
    },
    {
      title: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      color: '#1572B6'
    },
    {
      title: 'JavaScript',
      icon: 'fa-brands fa-js',
      color: '#F7DF1E'
    },
    {
      icon: "fa-brands fa-react",
      title: "TypeScript",
      color: "#007ACC"
    },
    {
      icon: "fa-brands fa-npm",
      title: "NPM",
      color: "#63E6BE"
    },
    {
      icon: "fa-brands fa-github",
      title: "GitHub",
      color: "#181717"
    },
    // {
    //   icon:"fa-brands fa-nestjs",
    //   title:"NestJS",
    //   color:"#E0234E"
    // },
    {
      icon:"fa-brands fa-docker",
      title:"Docker",
      color:"#2496ED"
    },
    // {
    //   icon:"fa-brands fa-kubernetes",
    //   title:"Kubernetes",
    //   color:"#326CE5"
    // },
    {
      icon: "fa-solid fa-code",
      title: "VS Code",
      color: "#007ACC"
    },

  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  readonly summary = ["Passionate Software Engineer with nearly 3 years of experience in full-stack development and back-end engineering.",
    "Skilled in collaborating with cross-functional teams to deliver high-quality software solutions.",
    "Committed to continuous learning and staying current with emerging technologies to drive innovation and business growth.",
  ];


  education = [
    { degree: 'Master of Computer Applications ', university: 'Anna University', year: '2024' },
    { degree: 'Bachelor of Computer Applications ', university: 'Bharathidasan University', year: '2020' }
  ];

  readonly name = "Poovarasan Anbalagan";
  readonly designation = "Full Stack Developer";
}

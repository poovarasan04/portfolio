import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceComponent {


  readonly experiences = [
    {
      company_name: "Amshuhu Itech Solutions",
      role: "FullStack Developer",
      duration: "January 2022 - April 2024",
      roles: [
        "Expert in designing responsive and interactive user interfaces using HTML5, CSS3, JavaScript (ES6+), Angular14+, and Flutter, delivering seamless and dynamic user experiences.",
        "Collaborated with cross-functional teams using agile methodologies, establish efficient task execution, timely delivery,and continuous improvement.",
        "Designed scalable and robust RESTful APIs using Node.js, TypeScript, and Express.js, integrating JWT middleware for authentication, error handling, and optimized API performance.",
        "Proficient in MySQL, specializing in database schema design, complex queries, and performance tuning to support high-traffic applications.",
        "Proficient in Git for version control, managing branching, merging, pull requests, and efficient collaboration in team-based environments."
      ]
    },
    {
      company_name: "Comviva Technologies",
      role: "Software Developer",
      duration: "July 2024 - January 2025",
      roles: [
        "Developed high-performance Node.js applications that integrate the MTN MoMo APIs through Ericsson, enabling efficient and secure payment and account management",
        "Enabled advanced security protocols and session management strategies, proactively addressing vulnerabilities and Ensuring strong system protection based on Fortify report recommendations.",
        "Designed dynamic JSON-to-XML converters for API requests, seamlessly processing XML responses back to JSON to enhance system interoperability.",
        "Optimized back-end performance, significantly improving API response times, enabling caching mechanisms, and refining database queries for maximum efficiency.",
        "Integrated third-party payment APIs using Super-Agent, delivering smooth and reliable transaction workflows across diverse platforms."
      ]
    }
  ]

}

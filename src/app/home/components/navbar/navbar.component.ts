import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrolled:boolean = false;
  private sections = ['home', 'about', 'projects', 'contact'];
  constructor(private router: Router,private api:ApiService){
    // window.addEventListener('scroll', () => {
    //   this.detectCurrentSection();
    // });
  }

  navigateToSection(sectionId: string) {
    console.log(sectionId)
    this.router.navigate([], { fragment: sectionId });
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.router.navigate([], { fragment: sectionId });

    }
  }

  closeNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

  detectCurrentSection() {
    let currentSection = this.sections[0];

    for (let section of this.sections) {
      const element = document.getElementById(section);
      // console.log(element)
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
          break;
        }
      }
    }
    this.router.navigate([], { fragment: currentSection });
  }

  downloadPdf(){
    this.api.downloadPdf();
  }
}

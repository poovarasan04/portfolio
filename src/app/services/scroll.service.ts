import { Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sections = ['home', 'about', 'projects', 'contact']; // IDs of sections

  constructor(private router: Router, private zone: NgZone) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToSection();
      }
    });

    window.addEventListener('scroll', () => {
      this.detectCurrentSection();
    });

  }

  // Scroll to section on navigation
  scrollToSection() {
    const fragment = this.router.getCurrentNavigation()?.extras.fragment;
    if (fragment) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  // Detect the currently visible section
  detectCurrentSection() {
    let currentSection = this.sections[0];

    for (let section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
          break;
        }
      }
    }

    // Update the route only if it's different
    this.zone.run(() => {
      const currentPath = this.router.url.split('#')[0]; // Remove old fragment
      this.router.navigate([currentPath], { fragment: currentSection });
    });
  }
}

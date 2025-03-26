import { Component ,HostListener} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrolled = false;
  readonly about=" Experienced software Engineer with a passion for creating visually stunning and user-friendly websites."
  readonly name="Poovarasan Anbalagan";
  readonly designation="Full Stack Developer";
  constructor(private api:ApiService,private router:Router){

  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
    // console.log(this.scrolled);
  }

  downloadPdf(){
    this.api.downloadPdf();
  }
  openLink(app:string){
    let url = '';

    switch (app) {
      case 'linkedin':
        url = 'https://www.linkedin.com/in/poovarasan-anbalagan-96b450208';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/poovarasan_an/';
        break;
      case 'email':
        url = 'mailto:poovarasananbalagan@gmail.com';
        break;
      case 'github':
        url = 'https://github.com/poovarasan04';
        break;
    }

    if (url) {
      window.open(url, '_blank');
    }
  }

  moveSection(){
    const section = document.getElementById('contact');
    if (section) {
      this.router.navigate([], { fragment: 'contact' });
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}


import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private fb:FormBuilder,private api:ApiService) { }

  contactForm:FormGroup=new FormGroup({});

  @ViewChild('emailForm') emailForm!: ElementRef<HTMLFormElement>;

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',Validators.required]
    });
  }

  submitForm(){
    // console.log(this.emailForm.nativeElement)
    this.api.sendEmail(this.emailForm.nativeElement);
    this.contactForm.reset();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Environment } from '../../environment/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    responseType: "blob"
  })


  downloadPdf() {
    const fileId = "16NMyCF60HQs_WAov5GIaep_rbdLUfSl5";
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', "poovarasan_cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }

  sendEmail(data: any) {
    // console.log(data)
    emailjs.sendForm(Environment.mail_service_id, Environment.mail_template_id, data, Environment.mail_pub_key)
      .then((result) => {
        console.log(result);
        alert("Email sent successfully")
      },
        (error) => {
          console.log(error)
        }
      )
  }
}

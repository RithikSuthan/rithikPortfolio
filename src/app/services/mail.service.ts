import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EndPoints } from '../Constants/Endpoints';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  email_service_url:any;

  constructor(private http:HttpClient) { 
    // this.email_service_url="https://mailboxexpress.el.r.appspot.com";
    this.email_service_url="https://mailbox-express-k9hn.onrender.com";
    // this.email_service_url="http://127.0.0.1:5000";
    
  }
  contact_me(postObj:any)
  {
    const url=this.email_service_url+EndPoints.contact;
    return this.http.post<any>(url,postObj);
  }
  portfolioVisit(postObj:any)
  {
    const url=this.email_service_url+EndPoints.portfolioVisit;
    return this.http.post<any>(url,postObj);
  }
}

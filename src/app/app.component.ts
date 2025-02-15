import { Component } from '@angular/core';
import { MailService } from './services/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'rithikPortfolio';
  ngOnInit()
  {
    this.postData();
  }
  constructor(private mail:MailService){}
  postData() {
      const params = {
        message: "Someone Visited your Portfolio!"
      };
      
      this.mail.portfolioVisit(params).subscribe(
        (response)=>
        {
            // alert("Notified Sucessfully");
        },
        (error)=>
        {
            console.error(error);
        }
      )
  }
}

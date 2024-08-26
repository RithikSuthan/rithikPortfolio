import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import * as emailjs from 'emailjs-com';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  userId = 'bq3JQQdeJ331rUCQl';

  dataForm: FormGroup;

  constructor(private el: ElementRef, private scrollService: ScrollService,private fb: FormBuilder,private mail:MailService)
   {emailjs.init(this.userId);
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['',[Validators.required]]
    }); }

  ngOnInit(): void {
    this.scrollService.getScrollToSubject().subscribe(fragment => {
      if (fragment === 'contact') {
        this.scroll();
      }
    });
  }

  ngAfterViewInit(): void {
    this.scrollService.getScrollToSubject().subscribe(fragment => {
      if (fragment === 'contact') {
        this.scroll();
      }
    });
  }

  private scroll(): void {
    const element = this.getAboutElement();
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  getAboutElement(): HTMLElement | null {
    return this.el.nativeElement;
  }

  postData() {
    if (this.dataForm.valid) {
      const params = {
        from_name: this.dataForm.value.name,
        email_id: this.dataForm.value.email,
        message: this.dataForm.value.message
      };
      
      this.mail.contact_me(params).subscribe(
        (response)=>
        {
            alert("Notified Sucessfully");
        },
        (error)=>
        {
            console.error(error);
        }
      )


    //   emailjs.send('service_fawfsm2', 'template_n779uve', params)
    //     .then((response) => {
    //       console.log('Success:', response);
    //       alert('Message Sent!');
    //     })
    //     .catch((error) => {
    //       console.error('Failed:', error);
    //       alert('FAILED...');
    //     });
    // } else {
    //   alert('Please fill in the required fields.');
    }
  }
}

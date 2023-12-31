import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadResume()
  {
    alert("Download Resume");
  }
  contactInfo()
  {
    alert("Contact");
  }
  loadLinkedin()
  {
    alert("Load linkedin");
  }
  loadGithub()
  {
    alert("Github");
  }
}

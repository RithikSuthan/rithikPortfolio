import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private http: HttpClient) { }
  isPreviewing = false;

  ngOnInit(): void {
  }
  downloadResume() {
    const resumeUrl = '../../assets/RITHIK_SUTHAN_S_2031035.pdf';

    this.http.get(resumeUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const newTab = window.open('', '_blank');

      if (newTab) {
        newTab.document.write(`
          <html>
            <head>
              <title>Rithik Suthan Resume</title>
            </head>
            <body style="margin:0px;">
              <embed src="${blobUrl}" type="application/pdf" width="100%" height="100%">
            </body>
          </html>
        `);
      }
    });
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

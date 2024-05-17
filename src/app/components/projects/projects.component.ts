import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private el: ElementRef, private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScrollToSubject().subscribe(fragment => {
      if (fragment === 'project') {
        this.scroll();
      }
    });
  }

  ngAfterViewInit(): void {
    this.scrollService.getScrollToSubject().subscribe(fragment => {
      if (fragment === 'project') {
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

  openMakeMyJourney()
  {
      const url = 'https://github.com/RithikSuthan/Make-My-Journey';
      window.open(url, '_blank');
  }
  openStaffSyncGithub()
  {
      const url = 'https://github.com/RithikSuthan/employeemanagementUI';
      window.open(url, '_blank');
  }
  openStaffSync()
  {
      const url = 'https://employeeimage-latest.onrender.com';
      window.open(url, '_blank');
  }
  openCarPrice()
  {
    const url = 'https://github.com/RithikSuthan/Car-Price-Prediction';
    window.open(url, '_blank');
  }
  openMelinia()
  {
    const url = 'https://melinia24.tech';
    window.open(url, '_blank');
  }
  openMeliniaGithub()
  {
    const url = 'https://github.com/RithikSuthan/Melinia2K24';
    window.open(url, '_blank');
  }
  openFire()
  {
    const url = 'https://drive.google.com/file/d/1WjfXlG6cLh9b0m37j0sO0oxnLcZ6L1Nw/view?usp=sharing';
    window.open(url, '_blank');
  }
  openFireGithub()
  {
    const url = 'https://github.com/RithikSuthan/Fire-Fighting-Robot';
    window.open(url, '_blank');
  }
  openCrimeGithub()
  {
    const url = 'https://github.com/RithikSuthan/Analysis-of-Crime-Against-Women-in-India';
    window.open(url, '_blank');
  }
  github()
  {
    const url = 'https://github.com/RithikSuthan';
    window.open(url, '_blank');
  }
}

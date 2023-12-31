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

}

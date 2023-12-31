// about.component.ts
import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private el: ElementRef, private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScrollToSubject().subscribe(fragment => {
      if (fragment === 'about') {
        this.scroll();
      }
    });
  }

  ngAfterViewInit(): void {
    this.scrollService.getScrollToSubject().subscribe(fragment => {
      if (fragment === 'about') {
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

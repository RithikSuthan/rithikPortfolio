import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  constructor(private el: ElementRef, private scrollService: ScrollService) { }

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


}

// scroll.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToSubject = new Subject<string>();

  scrollTo(fragment: string): void {
    this.scrollToSubject.next(fragment);
  }

  getScrollToSubject(): Subject<string> {
    return this.scrollToSubject;
  }
}

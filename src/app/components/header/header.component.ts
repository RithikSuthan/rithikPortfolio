// header.component.ts
import { Component, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private router: Router, private scrollService: ScrollService) {
  }

  ngAfterViewInit(): void {
    this.scrollToFragmentFromRoute();
  }

  scrollTo(fragment: string): void {
    this.scrollService.scrollTo(fragment);
  }

  private scrollToFragmentFromRoute(): void {
    const currentFragment = this.router.parseUrl(this.router.url).fragment;
    if (currentFragment) {
      this.scrollTo(currentFragment);
    }
  }
  ngOnit()
  {
  }
}

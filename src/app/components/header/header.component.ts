// header.component.ts
import { Component, AfterViewInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  sideFlag:any;
  constructor(private router: Router, private scrollService: ScrollService) {
    this.sideFlag=false;
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
  hideSideNav()
  {
      this.sideFlag=!this.sideFlag;
  }
  onClickOutsideSideNav(event: MouseEvent) {
    const sideNavElement = document.querySelector('.sideNav') as HTMLElement;
    const toggleIconElement = document.querySelector('.toggleButton') as HTMLElement; // Replace '.github-icon' with the appropriate selector for your GitHub line icon
    if (sideNavElement && !sideNavElement.contains(event.target as Node) && !toggleIconElement.contains(event.target as Node)) {
        this.hideSideNav();
    }
  }

  ngOnInit() {
    document.addEventListener('click', this.onClickOutsideSideNav.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onClickOutsideSideNav.bind(this));
  }
}

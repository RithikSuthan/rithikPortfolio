import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor(private router: Router, private scrollService: ScrollService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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

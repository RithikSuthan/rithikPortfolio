import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetstatsComponent } from './leetstats.component';

describe('LeetstatsComponent', () => {
  let component: LeetstatsComponent;
  let fixture: ComponentFixture<LeetstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeetstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeetstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSlide } from './hero-slide';

describe('HeroSlide', () => {
  let component: HeroSlide;
  let fixture: ComponentFixture<HeroSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSlide],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSlide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

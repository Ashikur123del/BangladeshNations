import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedGoal } from './featured-goal';

describe('FeaturedGoal', () => {
  let component: FeaturedGoal;
  let fixture: ComponentFixture<FeaturedGoal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedGoal],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedGoal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

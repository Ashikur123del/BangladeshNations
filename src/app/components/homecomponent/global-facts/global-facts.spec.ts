import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFacts } from './global-facts';

describe('GlobalFacts', () => {
  let component: GlobalFacts;
  let fixture: ComponentFixture<GlobalFacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFacts],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalFacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

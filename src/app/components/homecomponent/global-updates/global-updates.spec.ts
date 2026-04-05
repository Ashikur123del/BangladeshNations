import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalUpdates } from './global-updates';

describe('GlobalUpdates', () => {
  let component: GlobalUpdates;
  let fixture: ComponentFixture<GlobalUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalUpdates],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalUpdates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

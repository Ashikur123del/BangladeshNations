import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watchlisten } from './watchlisten';

describe('Watchlisten', () => {
  let component: Watchlisten;
  let fixture: ComponentFixture<Watchlisten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Watchlisten],
    }).compileComponents();

    fixture = TestBed.createComponent(Watchlisten);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

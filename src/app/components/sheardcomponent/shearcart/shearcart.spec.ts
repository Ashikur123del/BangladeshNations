import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shearcart } from './shearcart';

describe('Shearcart', () => {
  let component: Shearcart;
  let fixture: ComponentFixture<Shearcart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shearcart],
    }).compileComponents();

    fixture = TestBed.createComponent(Shearcart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

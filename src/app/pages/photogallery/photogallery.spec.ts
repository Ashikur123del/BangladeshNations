import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photogallery } from './photogallery';

describe('Photogallery', () => {
  let component: Photogallery;
  let fixture: ComponentFixture<Photogallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photogallery],
    }).compileComponents();

    fixture = TestBed.createComponent(Photogallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

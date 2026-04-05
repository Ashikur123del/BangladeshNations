import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalGallery } from './global-gallery';

describe('GlobalGallery', () => {
  let component: GlobalGallery;
  let fixture: ComponentFixture<GlobalGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

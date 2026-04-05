import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnStructure } from './un-structure';

describe('UnStructure', () => {
  let component: UnStructure;
  let fixture: ComponentFixture<UnStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnStructure],
    }).compileComponents();

    fixture = TestBed.createComponent(UnStructure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

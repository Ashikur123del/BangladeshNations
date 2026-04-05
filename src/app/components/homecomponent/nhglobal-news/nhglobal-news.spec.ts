import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHGlobalNews } from './nhglobal-news';

describe('NHGlobalNews', () => {
  let component: NHGlobalNews;
  let fixture: ComponentFixture<NHGlobalNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NHGlobalNews],
    }).compileComponents();

    fixture = TestBed.createComponent(NHGlobalNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

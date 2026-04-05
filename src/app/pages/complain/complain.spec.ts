import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplainPage } from './complain';

describe('ComplainPage', () => {
  let component: ComplainPage;
  let fixture: ComponentFixture<ComplainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

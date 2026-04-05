import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalPage } from './global';

describe('GlobalPage', () => {
  let component: GlobalPage;
  let fixture: ComponentFixture<GlobalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

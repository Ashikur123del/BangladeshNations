import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionPage } from './mission';

describe('MissionPage', () => {
  let component: MissionPage;
  let fixture: ComponentFixture<MissionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

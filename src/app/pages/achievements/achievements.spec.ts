import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementsPage } from './achievements';

describe('AchievementsPage', () => {
  let component: AchievementsPage;
  let fixture: ComponentFixture<AchievementsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

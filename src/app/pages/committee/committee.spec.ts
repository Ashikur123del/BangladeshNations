import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommitteePage } from './committee';

describe('CommitteePage', () => {
  let component: CommitteePage;
  let fixture: ComponentFixture<CommitteePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

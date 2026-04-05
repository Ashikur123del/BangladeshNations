import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPulse } from './world-pulse';

describe('WorldPulse', () => {
  let component: WorldPulse;
  let fixture: ComponentFixture<WorldPulse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldPulse],
    }).compileComponents();

    fixture = TestBed.createComponent(WorldPulse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

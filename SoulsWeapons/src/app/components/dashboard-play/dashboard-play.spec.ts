import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlay } from './dashboard-play';

describe('DashboardPlay', () => {
  let component: DashboardPlay;
  let fixture: ComponentFixture<DashboardPlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

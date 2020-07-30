import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActiveAlarmsComponent } from './dashboard-active-alarms.component';

describe('DashboardActiveAlarmsComponent', () => {
  let component: DashboardActiveAlarmsComponent;
  let fixture: ComponentFixture<DashboardActiveAlarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardActiveAlarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActiveAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

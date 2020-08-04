import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlarmsPieChartComponent} from './alarms-pie-chart.component';


describe('AlarmsPieChartComponent', () => {
  let component: AlarmsPieChartComponent;
  let fixture: ComponentFixture<AlarmsPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

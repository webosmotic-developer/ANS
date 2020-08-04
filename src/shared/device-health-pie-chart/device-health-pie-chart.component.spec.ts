import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DeviceHealthPieChartComponent} from './device-health-pie-chart.component';



describe('DeviceHealthPieChartComponent', () => {
  let component: DeviceHealthPieChartComponent;
  let fixture: ComponentFixture<DeviceHealthPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceHealthPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceHealthPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

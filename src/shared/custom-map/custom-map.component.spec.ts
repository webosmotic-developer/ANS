import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMapComponent } from './custom-map.component';

describe('CustomMapComponent', () => {
  let component: CustomMapComponent;
  let fixture: ComponentFixture<CustomMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

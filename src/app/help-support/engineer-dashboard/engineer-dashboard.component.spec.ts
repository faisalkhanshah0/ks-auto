import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerDashboardComponent } from './engineer-dashboard.component';

describe('EngineerDashboardComponent', () => {
  let component: EngineerDashboardComponent;
  let fixture: ComponentFixture<EngineerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
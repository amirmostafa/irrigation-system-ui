import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePlotComponent } from './configure-plot.component';

describe('ConfigurePlotComponent', () => {
  let component: ConfigurePlotComponent;
  let fixture: ComponentFixture<ConfigurePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightProfiledComponent } from './light-profiled.component';

describe('LightProfiledComponent', () => {
  let component: LightProfiledComponent;
  let fixture: ComponentFixture<LightProfiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightProfiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightProfiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

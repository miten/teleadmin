import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightProfileComponent } from './light-profile.component';

describe('LightProfileComponent', () => {
  let component: LightProfileComponent;
  let fixture: ComponentFixture<LightProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

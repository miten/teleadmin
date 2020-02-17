import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsComponent } from './consultation.component';

describe('ConsultationComponent', () => {
  let component: ConsultationsComponent;
  let fixture: ComponentFixture<ConsultationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

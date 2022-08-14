import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolyearDetailComponent } from './schoolyear-detail.component';

describe('SchoolyearDetailComponent', () => {
  let component: SchoolyearDetailComponent;
  let fixture: ComponentFixture<SchoolyearDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolyearDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolyearDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

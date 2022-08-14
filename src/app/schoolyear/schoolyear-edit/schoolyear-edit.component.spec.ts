import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolyearEditComponent } from './schoolyear-edit.component';

describe('SchoolyearEditComponent', () => {
  let component: SchoolyearEditComponent;
  let fixture: ComponentFixture<SchoolyearEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolyearEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolyearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolyearListComponent } from './schoolyear-list.component';

describe('SchoolyearListComponent', () => {
  let component: SchoolyearListComponent;
  let fixture: ComponentFixture<SchoolyearListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolyearListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolyearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

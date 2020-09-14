import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassromsEditComponent } from './classroms-edit.component';

describe('ClassromsEditComponent', () => {
  let component: ClassromsEditComponent;
  let fixture: ComponentFixture<ClassromsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassromsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassromsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

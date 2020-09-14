import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassromsFormComponent } from './classroms-form.component';

describe('ClassromsFormComponent', () => {
  let component: ClassromsFormComponent;
  let fixture: ComponentFixture<ClassromsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassromsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassromsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

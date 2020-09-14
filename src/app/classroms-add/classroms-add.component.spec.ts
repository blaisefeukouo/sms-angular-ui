import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassromsAddComponent } from './classroms-add.component';

describe('ClassromsAddComponent', () => {
  let component: ClassromsAddComponent;
  let fixture: ComponentFixture<ClassromsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassromsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassromsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

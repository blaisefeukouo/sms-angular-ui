import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassromsDetailsComponent } from './classroms-details.component';

describe('ClassromsDetailsComponent', () => {
  let component: ClassromsDetailsComponent;
  let fixture: ComponentFixture<ClassromsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassromsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassromsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

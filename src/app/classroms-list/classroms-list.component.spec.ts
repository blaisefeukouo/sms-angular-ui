import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassromsListComponent } from './classroms-list.component';

describe('ClassromsListComponent', () => {
  let component: ClassromsListComponent;
  let fixture: ComponentFixture<ClassromsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassromsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassromsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

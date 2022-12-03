import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEducationFormComponent } from './resume-education-form.component';

describe('ResumeEducationFormComponent', () => {
  let component: ResumeEducationFormComponent;
  let fixture: ComponentFixture<ResumeEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeEducationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

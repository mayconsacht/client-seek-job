import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExperienceFormComponent } from './resume-experience-form.component';

describe('ResumeExperienceFormComponent', () => {
  let component: ResumeExperienceFormComponent;
  let fixture: ComponentFixture<ResumeExperienceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeExperienceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

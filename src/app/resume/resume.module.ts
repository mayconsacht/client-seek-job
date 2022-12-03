import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { ResumeAboutFormComponent } from './my-resume/about/resume-about-form/resume-about-form.component';
import { ResumeAboutComponent } from './my-resume/about/resume-about/resume-about.component';
import { ResumeDetailsFormComponent } from './my-resume/details/resume-details-form/resume-details-form.component';
import { ResumeDetailsComponent } from './my-resume/details/resume-details/resume-details.component';
import { ResumeEducationFormComponent } from './my-resume/education/resume-education-form/resume-education-form.component';
import { ResumeEducationComponent } from './my-resume/education/resume-education/resume-education.component';
import { ResumeExperienceFormComponent } from './my-resume/experience/resume-experience-form/resume-experience-form.component';
import { ResumeExperienceComponent } from './my-resume/experience/resume-experience/resume-experience.component';
import { ResumeLanguagesComponent } from './my-resume/languages/resume-languages.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ResumeSkillsComponent } from './my-resume/skills/resume-skills.component';

const routes: Routes = [
  { path: '', component: MyResumeComponent }
];

@NgModule({
  declarations: [MyResumeComponent, ResumeDetailsComponent, ResumeDetailsFormComponent, ResumeSkillsComponent, ResumeAboutFormComponent, ResumeAboutComponent, ResumeEducationComponent, ResumeEducationFormComponent, ResumeExperienceFormComponent, ResumeExperienceComponent, ResumeLanguagesComponent],
  exports: [MyResumeComponent],
  imports: [
    CommonModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ResumeModule { }

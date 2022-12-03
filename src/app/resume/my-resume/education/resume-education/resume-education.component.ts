import { Component, Input, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';
import { ResumeService } from 'src/app/core/resume/resume.service';
import { Education } from 'src/app/shared/models/education';
import { Resume } from 'src/app/shared/models/resume';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.less']
})
export class ResumeEducationComponent {
  @ViewChild('reactiveFormDataEd', { static: true }) reactiveFormModal: PoModalComponent;
  @Input() resume: Resume;
  isNew = false;
  currentIndex: number;
  currentFormation: Education = {
    instituition: "",
    description: "",
    endDate: null,
    startDate: null
  };
  
  constructor(private resumeService: ResumeService) { }

  openForm(): void {
    this.isNew = true;
    this.reactiveFormModal.open()
  }

  async save(currentFormation: Education): Promise<void> {
    this.resume.education = this.resume.education ? this.resume.education : [];
    this.resume.education.push(currentFormation);
    await this.resumeService.setCurrentState(this.resume);
    this.reactiveFormModal.close();
  }
}
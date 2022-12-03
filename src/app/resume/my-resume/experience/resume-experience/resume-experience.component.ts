import { Component, Input, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';
import { ResumeService } from 'src/app/core/resume/resume.service';
import { EmployeeHistory } from 'src/app/shared/models/employeeHistory';
import { Resume } from 'src/app/shared/models/resume';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.less']
})
export class ResumeExperienceComponent {
  @ViewChild('reactiveFormDataEx', { static: true }) reactiveFormModal!: PoModalComponent;
  @Input() resume!: Resume;
  isNew = false;
  currentIndex!: number;
  currentHistory: EmployeeHistory = {
    companyName: "",
    description: "",
    endDate: null,
    startDate: null
  };
  
  constructor(private resumeService: ResumeService) { }

  openForm(): void {
    this.isNew = true;
    this.reactiveFormModal.open()
  }

  async save(currentHistory: EmployeeHistory): Promise<void> {
    this.resume.employeeHistory = this.resume.employeeHistory ? this.resume.employeeHistory : [];
    if (this.isNew) {
      this.resume.employeeHistory.push(currentHistory);
    } else {
      this.resume.employeeHistory[this.currentIndex] = currentHistory;
    }
    await this.resumeService.setCurrentState(this.resume);
    this.reactiveFormModal.close();
  }
}

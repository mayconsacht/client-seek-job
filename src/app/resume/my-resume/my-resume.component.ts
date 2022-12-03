import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ResumeService } from 'src/app/core/resume/resume.service';
import { Resume } from 'src/app/shared/models/resume';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.less']
})
export class MyResumeComponent implements OnInit {
  reactiveForm!: UntypedFormGroup;
  resume!: Resume;
  loading = true;

  constructor(private resumeService: ResumeService) {}

  async ngOnInit(): Promise<void> {
    this.resumeService.state$.subscribe(async resume => {
      var resumeClone = { ...resume, phone: resume.phone.replace(/[^\d]/g, '')};
      if (resumeClone) {
        await this.savedBasicInformation(resumeClone);
      }
    });
    try {
      this.resume = await this.resumeService.getResume();
    } catch(error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  async savedBasicInformation(fields: Resume): Promise<void> {
    const currentResume: Resume = { ...fields };
    this.resume = { ... await this.resumeService.saveResume(currentResume)};
  }
}

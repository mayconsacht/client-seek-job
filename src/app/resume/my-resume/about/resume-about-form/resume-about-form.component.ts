import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ResumeService } from 'src/app/core/resume/resume.service';
import { Resume } from 'src/app/shared/models/resume';

@Component({
  selector: 'app-resume-about-form',
  templateUrl: './resume-about-form.component.html',
  styleUrls: ['./resume-about-form.component.less']
})
export class ResumeAboutFormComponent implements OnInit {
  @Input() resume: Resume;
  @Output() saved = new EventEmitter();
  reactiveForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private resumeService: ResumeService) {}
  
  ngOnInit() {
    this.createReactiveForm();
  }

  createReactiveForm(): void {
    this.reactiveForm = this.fb.group({
      profileDescription: [this.resume.profileDescription, Validators.maxLength(300)],
    });
  }

  async saveForm(): Promise<void> {
    await this.resumeService.setCurrentState({... this.resume, ... this.reactiveForm.value});
    this.saved.emit();
  }
}

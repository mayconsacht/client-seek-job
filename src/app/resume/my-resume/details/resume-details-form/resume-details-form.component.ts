import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ResumeService } from 'src/app/core/resume/resume.service';
import { Resume } from 'src/app/shared/models/resume';

interface BasicInformationView {
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-resume-details-form',
  templateUrl: './resume-details-form.component.html',
  styleUrls: ['./resume-details-form.component.less']
})
export class ResumeDetailsFormComponent implements OnInit {
  @Input() resume: Resume;
  @Output() saved = new EventEmitter();
  reactiveForm: UntypedFormGroup;
  basicInformation: BasicInformationView = {
    name: '',
    email: '',
    city: '',
    neighborhood: '',
    phone: '',
    state: ''
  };

  constructor(private fb: UntypedFormBuilder, private resumeService: ResumeService) {}
  
  ngOnInit() {
    this.basicInformation = this.resume ? { ...this.resume } : this.basicInformation;
    this.createReactiveForm();
  }

  createReactiveForm(): void {
    this.reactiveForm = this.fb.group({
      name: [this.basicInformation.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: [this.basicInformation.email, Validators.required],
      phone: [this.basicInformation.phone, Validators.compose([Validators.required])],
      neighborhood: [this.basicInformation.neighborhood, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      city: [this.basicInformation.city, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      state: [this.basicInformation.state, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)])],
    });
  }

  async saveForm(): Promise<void> {
    await this.resumeService.setCurrentState({...this.resume, ...this.reactiveForm.value });
    this.saved.emit();
  }
}

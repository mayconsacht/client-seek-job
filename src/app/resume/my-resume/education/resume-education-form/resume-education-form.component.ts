import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/shared/models/education';

@Component({
  selector: 'app-resume-education-form',
  templateUrl: './resume-education-form.component.html',
  styleUrls: ['./resume-education-form.component.less']
})
export class ResumeEducationFormComponent implements OnInit {
  @Input() education!: Education;
  @Output() saved = new EventEmitter<Education>();
  reactiveForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}
  
  ngOnInit() {
    this.createReactiveForm();
  }

  createReactiveForm(): void {
    this.reactiveForm = this.fb.group({
      instituition: [this.education.instituition, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      startDate: [this.education.startDate, Validators.required],
      endDate: [this.education.endDate, Validators.required],
      description: [this.education.description, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])]
    });
  }

  async saveForm(): Promise<void> {
    this.saved.emit(this.reactiveForm.value);
    this.education = {
      instituition: '',
      description: '',
      endDate: null,
      startDate: null
    }
    this.createReactiveForm();
  }
}

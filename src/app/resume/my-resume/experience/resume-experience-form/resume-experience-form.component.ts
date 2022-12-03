import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EmployeeHistory } from 'src/app/shared/models/employeeHistory';

@Component({
  selector: 'app-resume-experience-form',
  templateUrl: './resume-experience-form.component.html',
  styleUrls: ['./resume-experience-form.component.less']
})
export class ResumeExperienceFormComponent implements OnInit {
  @Input() history!: EmployeeHistory;
  @Output() saved = new EventEmitter<EmployeeHistory>();
  reactiveForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}
  
  ngOnInit() {
    this.createReactiveForm();
  }

  createReactiveForm(): void {
    this.reactiveForm = this.fb.group({
      companyName: [this.history.companyName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      startDate: [this.history.startDate, Validators.required],
      endDate: [this.history.endDate, Validators.required],
      description: [this.history.description, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])]
    });
  }

  async saveForm(): Promise<void> {
    this.saved.emit(this.reactiveForm.value);
    this.history = {
      companyName: '',
      description: '',
      endDate: null,
      startDate: null
    }
    this.createReactiveForm();
  }
}

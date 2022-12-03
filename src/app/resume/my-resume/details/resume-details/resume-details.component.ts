import { Component, Input, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';
import { Resume } from 'src/app/shared/models/resume';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.less']
})
export class ResumeDetailsComponent {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;
  @Input() resume: Resume;  
}

import { Component, Input, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';
import { Resume } from 'src/app/shared/models/resume';

@Component({
  selector: 'app-resume-about',
  templateUrl: './resume-about.component.html',
  styleUrls: ['./resume-about.component.less']
})
export class ResumeAboutComponent {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;
  @Input() resume: Resume;  
}

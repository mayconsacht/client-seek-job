import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { ResumeService } from 'src/app/core/resume/resume.service';
import { Resume } from 'src/app/shared/models/resume';

interface SkillsView {
  description: string;
  isEdit: boolean;
}

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.less']
})
export class ResumeSkillsComponent implements OnInit, OnDestroy {
  @Input() resume!: Resume;
  subscription!: Subscription;
  $skills = new ReplaySubject();
  skills: SkillsView[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.subscription = this.$skills.subscribe(_ => {
      if (this.resume.skills) {
        this.skills = this.resume.skills.map((lang) => {
          return { description: lang, isEdit: false}
        });
      }
    });
    this.$skills.next(0);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  newSkill(): void {
    this.skills.push({ description: '', isEdit: true });
  }

  async save(): Promise<void> {
    const newSkills = this.skills.map(lang => lang.description);
    const updated = await this.resumeService.setCurrentState({...this.resume, skills: newSkills});
    this.resume.skills = updated.skills;
    this.$skills.next(0);
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { ResumeService } from 'src/app/core/resume/resume.service';
import { Resume } from 'src/app/shared/models/resume';

interface LanguagesView {
  description: string;
  isEdit: boolean;
}

@Component({
  selector: 'app-resume-languages',
  templateUrl: './resume-languages.component.html',
  styleUrls: ['./resume-languages.component.less']
})
export class ResumeLanguagesComponent implements OnInit, OnDestroy {
  @Input() resume!: Resume;
  subscription!: Subscription;
  $languages = new ReplaySubject();
  languages: LanguagesView[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.subscription = this.$languages.subscribe(_ => {
      if (this.resume.languages) {
        this.languages = this.resume.languages.map((lang) => {
          return { description: lang, isEdit: false}
        });
      }
    });
    this.$languages.next(0);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  newLanguage(): void {
    this.languages.push({ description: '', isEdit: true });
  }

  async save(): Promise<void> {
    const newLanguages = this.languages.map(lang => lang.description);
    const updated = await this.resumeService.setCurrentState({...this.resume, languages: newLanguages});
    this.resume.languages = updated.languages;
    this.$languages.next(0);
  }
}

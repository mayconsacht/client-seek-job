import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAboutFormComponent } from './resume-about-form.component';

describe('ResumeAboutFormComponent', () => {
  let component: ResumeAboutFormComponent;
  let fixture: ComponentFixture<ResumeAboutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeAboutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAboutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

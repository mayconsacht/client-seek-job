import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDetailsFormComponent } from './resume-details-form.component';

describe('ResumeBasicInformationFormComponent', () => {
  let component: ResumeDetailsFormComponent;
  let fixture: ComponentFixture<ResumeDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

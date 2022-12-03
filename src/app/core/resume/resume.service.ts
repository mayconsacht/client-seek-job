import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Resume } from 'src/app/shared/models/resume';
import { State } from 'src/app/shared/state/state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService extends State<Resume> {

  constructor(private http: HttpClient) {
    super();
   }

  async getResume(): Promise<Resume> {
    var ok = await lastValueFrom(this.http.get<Resume>(`${environment.api}/resume`));
    return ok;
  }

  async saveResume(resume: Resume): Promise<Resume> {
    return await lastValueFrom(this.http.put<Resume>(`${environment.api}/resume`, resume));
  }
}

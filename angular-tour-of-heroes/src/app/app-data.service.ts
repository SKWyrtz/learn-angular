import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VersionChange } from './version-change';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  getVersion(): Observable<VersionChange>{
    return of(VersionChange.PATCH);
  }
}

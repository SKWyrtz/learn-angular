import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { VersionChangeDialogComponent } from './version-change-dialog/version-change-dialog.component';
import { VersionChange } from './version-change';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openVersionChangeDialog(versionChange: VersionChange){
    this.dialog.open(VersionChangeDialogComponent, {
      height: '400px',
      width: '600px',
      data: {versionChange: versionChange}
    });
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { VersionChange } from '../version-change';

@Component({
  selector: 'app-version-change-dialog',
  templateUrl: './version-change-dialog.component.html',
  styleUrls: ['./version-change-dialog.component.scss']
})
export class VersionChangeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {versionChange: VersionChange}) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}

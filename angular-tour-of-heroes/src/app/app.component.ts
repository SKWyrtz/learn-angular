import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AppDataService } from './app-data.service';

import { VersionChange } from './version-change';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  versionChange = VersionChange.NONE;

  constructor(
    private appData: AppDataService,
    private dialogService: DialogService
  ){}
  
  ngOnInit(): void {
    this.appData.getVersion().subscribe({
      next: versionChange => this.versionChange = versionChange, 
      error: (err) => console.error(err), 
      complete: () => this.checkDialog()
    }
    );
  }

  checkDialog(): void{
    if (this.versionChange !== VersionChange.NONE) {
      this.dialogService.openVersionChangeDialog(this.versionChange);
    }
  }

}


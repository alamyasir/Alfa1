import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { AddNewSiteDialogComponent } from '../add-new-site-dialog/add-new-site-dialog.component';

interface userType {
  name: string;
  code: string;
}
interface Authority {
  name: string;
  code: string;
}


@Component({
  selector: 'app-add-site-dialog',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './add-site-dialog.component.html',
  styleUrl: './add-site-dialog.component.scss',
})
export class AddSiteDialogComponent {
  constructor(private router: Router, public dialogService: DialogService) {}

  onDialogClose() {
    this.ref.close();
  }
  SIuser!: userType[];

  selecteduser!: userType;

  ngOnInit() {
    this.SIuser = [
      { name: 'User Type 1', code: '1' },
      { name: 'User Type 2', code: '2' },
    ];
    this.approvingauthority = [
      { name: 'Authority 1', code: '1' },
      { name: 'Authority 2', code: '2' },
    ];
  }
  approvingauthority!: Authority[];

  selectedauthority!: Authority;

  ref: DynamicDialogRef | undefined;

  showAddNewSiteDialog() {
    this.ref = this.dialogService.open(AddNewSiteDialogComponent, {
      header: 'Add Site',
      width: '40%',
      contentStyle: { overflow: 'auto' },
      styleClass: 'png-dialogbox',
      baseZIndex: 10000,
      modal: true,
      closable: true,
      footer: '.',
    });
  }
}

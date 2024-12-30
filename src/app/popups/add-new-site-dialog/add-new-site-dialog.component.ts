import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


interface userType {
  name: string;
  code: string;
}
interface Authority {
  name: string;
  code: string;
}

@Component({
  selector: 'app-add-new-site-dialog',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './add-new-site-dialog.component.html',
  styleUrl: './add-new-site-dialog.component.scss',
})
export class AddNewSiteDialogComponent {
  constructor(private ref: DynamicDialogRef) { }
  
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
}

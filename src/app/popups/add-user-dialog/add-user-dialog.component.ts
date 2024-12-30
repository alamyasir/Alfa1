import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss',
})
export class AddUserDialogComponent {
  phonenumbersList = [{ name: '0333' }, { name: '0345' }];

  userstatusOptions = [
    { label: 'Active', value: '1' },
    { label: 'InActive', value: '2' },
  ];

  checked: boolean = true;
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
  checked4: boolean = false;
  
    constructor(private ref: DynamicDialogRef) { }
    
    onDialogClose() {
      this.ref.close();
    }
}

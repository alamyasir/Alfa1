import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

interface Organization {
  name: string;
  code: string;
}
interface Contract {
  name: string;
  code: string;
}
interface Status {
  name: string;
  code: string;
}

@Component({
  selector: 'app-advance-search-dialog',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './advance-search-dialog.component.html',
  styleUrl: './advance-search-dialog.component.scss',
})
export class AdvanceSearchDialogComponent {
  constructor(private ref: DynamicDialogRef) {}

  organizationlist!: Organization[];
  selectedorg!: Organization;

  contracttitle!: Contract[];
  selectedtitle!: Contract;

  status!: Status[];
  selectedstatus!: Status;

  ngOnInit() {
    this.organizationlist = [
      { name: 'Org 1', code: '1' },
      { name: 'Org 2', code: '2' },
    ];
    this.contracttitle = [
      { name: 'title 1', code: '1' },
      { name: 'title 2', code: '2' },
    ];
    this.status = [
      { name: 'Status 1', code: '1' },
      { name: 'Status 2', code: '2' },
    ];
  }

  onDialogClose() {
    this.ref.close();
  }
}

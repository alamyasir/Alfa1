import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdvanceSearchDialogComponent } from '../../../popups/advance-search-dialog/advance-search-dialog.component';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.scss',
})
export class DashboardTableComponent {
  constructor(public dialogService: DialogService) {}

  // Table headers
  tableHeaders = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'organization', header: 'Organization' },
    { field: 'contract', header: 'Contract' },
    { field: 'status', header: 'Status' },
    { field: 'dueDate', header: 'Due Date' },
    { field: 'actions', header: 'Actions' },
  ];

  // Table data
  siteTable = [
    {
      code: 'Q-0002',
      name: 'QT100',
      organization: 'Organization name',
      contract: 'Contract title',
      status: 'Approved',
      dueDate: '10/21/24',
    },
    {
      code: 'Q-0002',
      name: 'QT100',
      organization: 'Organization name',
      contract: 'Contract title',
      status: 'Approved',
      dueDate: '10/21/24',
    },
  ];
  ref: DynamicDialogRef | undefined;

  showAdvanceSearchDialog() {
    this.ref = this.dialogService.open(AdvanceSearchDialogComponent, {
      header: 'Advance Search',
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

import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { NewContractDialogComponent } from '../../../popups/new-contract-dialog/new-contract-dialog.component';

@Component({
  selector: 'app-contractlist-table',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './contractlist-table.component.html',
  styleUrl: './contractlist-table.component.scss'
})
export class ContractlistTableComponent {

  constructor(private router: Router, public dialogService: DialogService) { }
  ref: DynamicDialogRef | undefined;

  showNewContractDialog() {
    this.ref = this.dialogService.open(NewContractDialogComponent, {
      header: 'Add New Contract',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      styleClass: 'png-dialogbox',
      baseZIndex: 10000,
      modal: true,
      closable: true,
      footer: '.',
    });
  }

  selectedrow: any[] = [];
  //Table Headers
  tableHeaders: { field: string; header: string }[] = [
    { field: 'code', header: 'Site Code' },
    { field: 'name', header: 'Site Name' },
    { field: 'location', header: 'Location' },
    { field: 'date', header: 'Added on' },
    { field: 'contract', header: 'Contract' },
    { field: 'organization', header: 'Organization' },
    { field: 'status', header: 'Status' },
    { field: 'actions', header: 'Action' },
  ];

  ///Table Data
  contracttable: any[] = [
    {
      code: 'P001',
      name: 'Product 1',
      location: 'Location 1',
      date: '2024-01-01',
      contract: 'Contract Title',
      organization: 'Organization',
      status: 'Approved',
    },
    {
      code: 'P002',
      name: 'Product 2',
      location: 'Location 2',
      date: '2024-01-01',
      contract: 'Contract Title',
      organization: 'Organization',
      status: 'Rejected',
    },
    {
      code: 'P003',
      name: 'Product 3',
      location: 'Location 3',
      date: '2024-01-01',
      contract: 'Contract Title',
      organization: 'Organization',
      status: 'Pending',
    },
    {
      code: 'P004',
      name: 'Product 4',
      location: 'Location 4',
      date: '2024-01-01',
      contract: 'Contract Title',
      organization: 'Organization',
      status: 'Closed',
    },
    {
      code: 'P005',
      name: 'Product 5',
      location: 'Location 5',
      date: '2024-01-01',
      contract: 'Contract Title',
      organization: 'Organization',
      status: 'Draft',
    },
  ];
}

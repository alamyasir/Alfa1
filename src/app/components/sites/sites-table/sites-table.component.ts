import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddSiteDialogComponent } from '../../../popups/add-site-dialog/add-site-dialog.component';
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-sites-table',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './sites-table.component.html',
  styleUrl: './sites-table.component.scss',
    providers: [MessageService],
})
export class SitesTableComponent {

  constructor(private router: Router, public dialogService: DialogService, private messageService: MessageService) { }
  //Table Headers
  tableHeaders: { field: string; header: string }[] = [
    { field: 'code', header: 'Site Code' },
    { field: 'name', header: 'Site Name' },
    { field: 'location', header: 'Location' },
    { field: 'date', header: 'Added On' },
    { field: 'contract', header: 'Contract' },
    { field: 'organization', header: 'Organization' },
    { field: 'status', header: 'Status' },
    { field: 'actions', header: 'Action' },
  ];

  ///Table Data
  sitestable: any[] = [
    {
      code: 'P001',
      name: 'Product 1',
      location: 'Location',
      date: '2024-01-01',
      contract: 'Contract Title',
      organization: 'Organization',
      status: 'Approved',
    },
    {
      code: 'P002',
      name: 'Product 2',
      location: 'Location',
      date: '2024-01-01',
      contract: 'Contract Title',
      organization: 'Organization',
      status: 'Rejected',
    },
  ];

  selecteddata: any[] = [];
  ref: DynamicDialogRef | undefined;

  showAddSiteDialog() {
    this.ref = this.dialogService.open(AddSiteDialogComponent, {
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
  showDeleteDialog() {
     this.messageService.add({
       severity: 'error',
       summary: 'Delete Action',
       detail: 'Are you sure you want to delete this item?',
     });
    this.ref = this.dialogService.open(DeleteDialogComponent, {
      width: '30%',
      contentStyle: { overflow: 'auto' },
      styleClass: 'png-dialog, png-dialog-no-header',
      baseZIndex: 10000,
      maximizable: false,
      closable: false,
      footer: '.'
    });
}
}

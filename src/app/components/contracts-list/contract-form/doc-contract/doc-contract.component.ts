import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddDocumentDialogComponent } from '../../../../popups/add-document-dialog/add-document-dialog.component';

@Component({
  selector: 'app-doc-contract',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './doc-contract.component.html',
  styleUrl: './doc-contract.component.scss',
})
export class DocContractComponent {
  constructor(private router: Router, public dialogService: DialogService) {}

  tableHeaders: { field: string; header: string }[] = [
    { field: 'srNo', header: 'Sr No.' },
    { field: 'title', header: 'Title' },
    { field: 'docType', header: 'Document Type' },
    { field: 'date', header: 'Upload Date' },
    { field: 'actions', header: 'Actions' },
  ];

  ///Table Data
  doctable: any[] = [
    {
      srNo: '1',
      title: 'Document Name',
      docType: 'Contract',
      date: '10/21/24',
    },
    {
      srNo: '2',
      title: 'Document Name',
      docType: 'Contract',
      date: '10/21/24',
    },
  ];
  ref: DynamicDialogRef | undefined;

  showAddDocumentDialog() {
    this.ref = this.dialogService.open(AddDocumentDialogComponent, {
      header: 'Add Document',
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

import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contractual-items',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './contractual-items.component.html',
  styleUrl: './contractual-items.component.scss',
  providers: [MessageService],
})
export class ContractualItemsComponent {
  constructor(
    private router: Router,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}
  // Table headers
  tableHeaders = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Item Name' },
    { field: 'type', header: 'Item type' },
    { field: 'uom', header: 'UOM' },
    { field: 'cost', header: 'Unit Cost' },
    { field: 'actions', header: 'Actions' },
  ];

  // Table data
  availableitemTable = [
    {
      code: 'Q-0002',
      name: 'Site Name',
      type: 'Material',
      uom: 'Feet',
      cost: '100',
    },
    {
      code: 'Q-0002',
      name: 'Site Name',
      type: 'Material',
      uom: 'Feet',
      cost: '100',
    },
    {
      code: 'Q-0002',
      name: 'Site Name',
      type: 'Material',
      uom: 'Feet',
      cost: '100',
    },
  ];
  selecteditemTable = [
    {
      code: 'Q-0002',
      name: 'Site Name',
      type: 'Material',
      uom: 'Feet',
      cost: '100',
    },
    {
      code: 'Q-0002',
      name: 'Site Name',
      type: 'Material',
      uom: 'Feet',
      cost: '100',
    },
    {
      code: 'Q-0002',
      name: 'Site Name',
      type: 'Material',
      uom: 'Feet',
      cost: '100',
    },
  ];
  ref: DynamicDialogRef | undefined;
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
      footer: '.',
    });
  }

  show() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Item Added Successfully',
      life: 3000,
    });
  }
}

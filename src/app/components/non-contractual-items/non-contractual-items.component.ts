import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddItemsChangeOrderDialogComponent } from '../../popups/add-items-change-order-dialog/add-items-change-order-dialog.component';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-non-contractual-items',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './non-contractual-items.component.html',
  styleUrl: './non-contractual-items.component.scss',
    providers: [MessageService],
})
export class NonContractualItemsComponent {
      constructor(public dialogService: DialogService, private messageService: MessageService) {}
  
  tableHeaders = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Item Name' },
    { field: 'type', header: 'Item type' },
    { field: 'uom', header: 'UOM' },
    { field: 'cost', header: 'Unit Cost' },
    { field: 'actions', header: 'Actions' },
  ];

  // Table data
  addeditemTable = [
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
    
      showAddItemsChangeOrderDialog() {
        this.ref = this.dialogService.open(AddItemsChangeOrderDialogComponent, {
          header: 'Add Item',
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

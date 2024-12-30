import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChangeOrderDialogComponent } from '../../../popups/change-order-dialog/change-order-dialog.component';
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { MessageService } from 'primeng/api';


interface Site {
  name: string;
  code: string;
}

@Component({
  selector: 'app-change-order-form',
  standalone: true,
  imports: [
   PrimeNgModule
  ],
  templateUrl: './change-order-form.component.html',
  styleUrl: './change-order-form.component.scss',
    providers: [MessageService],
})
export class ChangeOrderFormComponent {
  
      constructor(private router: Router, public dialogService: DialogService, private messageService: MessageService) {}
  

  tableHeaders: { field: string; header: string }[] = [
    { field: 'itemCode', header: 'Item Code' },
    { field: 'itemName', header: 'Item Name' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'itemType', header: 'Item Type' },
    { field: 'itemType2', header: 'Item Type' },
    { field: 'unitType', header: 'Unit Type' },
    { field: 'unitCost', header: 'Unit Cost' },
    { field: 'itemCost', header: 'Item Cost' },
    { field: 'status', header: 'Status' },
    { field: 'actions', header: 'Actions' },
  ];

  ///Table Data
  items: any[] = [
    {
      itemCode: 'Q-0002',
      itemName: 'Syed Imran Haider',
      itemType: 'Admin',
      itemType2: 'Item Type',
      unitType: 'syedimran@gmail.com',
      unitCost: '(629) 555-0125',
      itemCost: '400 SAR',
      status: 'Approved',
    },
    {
      itemCode: 'Q-0002',
      itemName: 'Syed Imran Haider',
      itemType: 'Admin',
      itemType2: 'Item Type',
      unitType: 'syedimran@gmail.com',
      unitCost: '(629) 555-0125',
      itemCost: '400 SAR',
      status: 'Rejected',
    },
  ];
  sites!: Site[];

  selectedsite!: Site;

  ngOnInit() {
    this.sites = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  ref: DynamicDialogRef | undefined;
    
      showChangeOrderDialog() {
        this.ref = this.dialogService.open(ChangeOrderDialogComponent, {
          header: 'Add Items in Change Order: Contract Name',
          width: '90%',
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

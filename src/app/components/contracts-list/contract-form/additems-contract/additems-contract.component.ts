import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddItemDialogComponent } from '../../../../popups/add-item-dialog/add-item-dialog.component';


@Component({
  selector: 'app-additems-contract',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './additems-contract.component.html',
  styleUrl: './additems-contract.component.scss',
})
export class AdditemsContractComponent {
      constructor(private router: Router, public dialogService: DialogService) {}
  
  tableHeaders: { field: string; header: string }[] = [
    { field: 'itemCode', header: 'Item Code' },
    { field: 'itemName', header: 'Item Name' },
    { field: 'itemType', header: 'Item Type' },
    { field: 'itemType2', header: 'Item Type' },
    { field: 'unitType', header: 'Unit Type' },
    { field: 'unitCost', header: 'Unit Cost (SAR)' },
    { field: 'actions', header: 'Actions' },
  ];

  ///Table Data
  additemtable: any[] = [
    {
      itemCode: 'Q-0001',
      itemName: 'Item Name',
      itemType: 'Material',
      itemType2: 'Contractual Item',
      unitType: 'Linear Feet',
    },
    {
      itemCode: 'Q-0002',
      itemName: 'Item Name',
      itemType: 'Material',
      itemType2: 'Non Contractual Item',
      unitType: 'Linear Feet',
    },
  ];
      ref: DynamicDialogRef | undefined;
     
       showAddItemDialog() {
         this.ref = this.dialogService.open(AddItemDialogComponent, {
           header: 'Add Items in Contract: Contract Name',
           width: '90%',
           contentStyle: { overflow: 'auto' },
           styleClass: 'png-dialogbox',
           baseZIndex: 10000,
           modal: true,
           closable: true,
           footer: '.',
         });
       }
   }


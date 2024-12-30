import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-select-items',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './select-items.component.html',
  styleUrl: './select-items.component.scss',
  providers: [MessageService],
})
export class SelectItemsComponent {
  constructor(private messageService: MessageService) {}
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
  show() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Item Added Successfully',
      life: 3000,
    });
  }
}

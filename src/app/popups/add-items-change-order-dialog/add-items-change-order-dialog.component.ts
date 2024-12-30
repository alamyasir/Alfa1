import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

interface itemType {
  name: string;
  code: string;
}
interface Unit {
   name: string;
}

@Component({
  selector: 'app-add-items-change-order-dialog',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './add-items-change-order-dialog.component.html',
  styleUrl: './add-items-change-order-dialog.component.scss',
})
export class AddItemsChangeOrderDialogComponent {
  itemtype!: itemType[];

  selectedtype!: itemType;
  measureunit!: Unit[];

  selectedunit!: Unit;

  ngOnInit() {
    this.itemtype = [
      { name: 'Item Type 1', code: '1' },
      { name: 'Item Type 2', code: '2' },
    ];
    this.measureunit = [{ name: 'Unit 1' }, { name: 'Unit 2' }];
  }
  itemstatusOptions = [
    { label: 'Active', value: '1' },
    { label: 'InActive', value: '2' },
  ];
   constructor(private ref: DynamicDialogRef) {}
    onDialogClose() {
      this.ref.close();
    }
}

import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';

interface itemType {
  name: string;
  code: string;
}
interface Unit {
  name: string;
}
@Component({
  selector: 'app-add-new-items',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './add-new-items.component.html',
  styleUrl: './add-new-items.component.scss',
})
export class AddNewItemsComponent {

  value!: string;

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
}

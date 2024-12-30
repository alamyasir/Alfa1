import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-contract-list-dialog',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './contract-list-dialog.component.html',
  styleUrl: './contract-list-dialog.component.scss',
})
export class ContractListDialogComponent {
  constructor(private ref: DynamicDialogRef) {}
  selectedContract: any = null;

  categories: any[] = [
    {
      id: '1',
      name: 'Infrastructure Development ',
      description:
        'Constructing or upgrading urban areas, including roads, bridges, parks and drainage systems.',
    },
    {
      id: '2',
      name: 'Nationwide Fiber Optic Network',
      description:
        'Installing high-speed fiber optic cables across multiple cities to improve internet connectivity.',
    },
    {
      id: '3',
      name: 'Healthcare Facility Construction',
      description:
        'Installing high-speed fiber optic cables across multiple cities to improve internet connectivity.',
    },
  ];
  ngOnInit() {
    this.selectedContract = this.categories[0];
  }

  onContractSelect(contract: any): void {
    this.selectedContract = contract;
  }

  onDialogClose() {
    this.ref.close();
  }
  
}

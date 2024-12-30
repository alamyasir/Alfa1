import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContractFormComponent } from '../../components/contracts-list/contract-form/contract-form.component';

@Component({
  selector: 'app-new-contract-dialog',
  standalone: true,
  imports: [PrimeNgModule,ContractFormComponent],
  templateUrl: './new-contract-dialog.component.html',
  styleUrl: './new-contract-dialog.component.scss'
})
export class NewContractDialogComponent {
  constructor(private ref: DynamicDialogRef) { }
  selectedCategory: any = null;
  selectedContract: any = null;
  categories: any[] = [
    {
      id: '1',
      name: 'Blank Contract ',
      description: 'Start from scratch by setting up a new Contract with custom details, sites, and items.'
    },
    {
      id: '2',
      name: 'Duplicate an Existing Contract',
      description: 'Copy an existing contract’s structure and make adjustments as needed to suit your requirements.'
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

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Los Angeles', code: 'LA' },
    { name: 'Chicago', code: 'CH' },
    { name: 'Houston', code: 'HO' },
    { name: 'Phoenix', code: 'PH' },
  ];



  selectedCity: any = null;
}

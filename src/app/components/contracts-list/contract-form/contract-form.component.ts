import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';
import { BasicinfoContractComponent } from './basicinfo-contract/basicinfo-contract.component';
import { AdditemsContractComponent } from './additems-contract/additems-contract.component';
import { DocContractComponent } from './doc-contract/doc-contract.component';

@Component({
  selector: 'app-contract-form',
  standalone: true,
  imports: [PrimeNgModule,BasicinfoContractComponent,AdditemsContractComponent,DocContractComponent],
  templateUrl: './contract-form.component.html',
  styleUrl: './contract-form.component.scss'
})
export class ContractFormComponent {

}

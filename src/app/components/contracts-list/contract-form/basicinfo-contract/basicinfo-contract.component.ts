import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../shared/prime-ng/prime-ng.module';


interface Org {
  name: string;
  code: string;
}
interface status {
  name: string;
  code: string;
}


@Component({
  selector: 'app-basicinfo-contract',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './basicinfo-contract.component.html',
  styleUrl: './basicinfo-contract.component.scss',
})
export class BasicinfoContractComponent {
  organizations!: Org[];

  selectedorg!: Org;

  ngOnInit() {
    this.organizations = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
        this.status = [
          { name: 'Status 1', code: '1' },
          { name: 'Status 2', code: '2' },
        ];
  }
  status!: status[];

  selectedstatus!: status;

}

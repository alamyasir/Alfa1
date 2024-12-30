import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {



  title = 'static-cms-ui';
  visible: boolean = true;
  constructor(public dialogService: DialogService) { }

  ngOnInit() {


  }

  ref: DynamicDialogRef | undefined;




  // addContractDialog() {
  //   this.ref = this.dialogService.open(NewContractDialogComponent, {
  //     header: 'Add New Contract',
  //     width: '30%',
  //     contentStyle: { overflow: 'auto' },
  //     styleClass: 'png-dialogbox',
  //     baseZIndex: 10000,
  //     closable: true,
  //     modal: true,
  //     footer: '.'
  //   });
  // }
}

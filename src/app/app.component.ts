import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { NewContractDialogComponent } from './popups/new-contract-dialog/new-contract-dialog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule, SidebarMenuComponent, MainHeaderComponent, SidebarMenuComponent],
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




  addContractDialog() {
    this.ref = this.dialogService.open(NewContractDialogComponent, {
      header: 'Add New Contract',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      styleClass: 'png-dialogbox',
      baseZIndex: 10000,
      closable: true,
      modal: true,
      footer: '.'
    });
  }
}

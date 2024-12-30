import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { RouterOutlet } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { NewContractDialogComponent } from '../../popups/new-contract-dialog/new-contract-dialog.component';

@Component({
  selector: 'app-layout-wrapper',
  standalone: true,
  imports: [MainHeaderComponent, RouterOutlet, PrimeNgModule, SidebarMenuComponent, NewContractDialogComponent],
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.scss'
})
export class LayoutWrapperComponent {



  title = 'static-cms-ui';
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

  isSidebarActive: boolean = false;

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;

    const collapseElements = document.querySelectorAll('.collapse.in');
    collapseElements.forEach((el) => el.classList.toggle('in'));

    // const expandedElements = document.querySelectorAll('a[aria-expanded="true"]');
    // expandedElements.forEach((el) => el.setAttribute('aria-expanded', 'false'));
  }
}

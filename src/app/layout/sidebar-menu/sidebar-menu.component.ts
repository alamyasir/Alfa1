import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';
import { ContractListDialogComponent } from '../../popups/contract-list-dialog/contract-list-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  visible: boolean = true;
  files!: TreeNode[];
  selectedFile!: TreeNode;

  constructor(private router: Router, public dialogService: DialogService) {

  }
  selectedCategory: any = null;

  ngOnInit() {
    this.files = [
      {
        label: 'Dashboard',
        data: 'layout/dashboard',
        icon: 'pi pi-folder',
        type: 'url',
      },
      {
        label: 'Users',
        data: 'layout/userList',
        icon: 'pi pi-folder',
        type: 'url',
      },
      {
        label: 'Contracts',
        data: 'layout/contractList',
        icon: 'pi pi-folder',
        type: 'url',
      },
      {
        label: 'Sites',
        data: 'layout/sites',
        icon: 'pi pi-folder',
        type: 'url',
      },
      {
        label: 'Change Orders',
        data: 'layout/changeOrder',
        icon: 'pi pi-folder',
        type: 'url',
      },

      {
        label: 'Pictures',
        data: 'Pictures Folder',
        icon: 'pi pi-image',
        children: [
          { label: 'barcelona.png', data: 'Barcelona Photo', icon: 'pi pi-image' },
          { label: 'logo.png', data: 'PrimeNG Logo', icon: 'pi pi-image' }
        ]
      }
    ];
  }

  onCategorySelect(category: any): void {
    this.selectedCategory = category;
  }

  onNodeSelect(event: any) {
    const selectedNode = event.node;

    if (selectedNode.type === 'url' && selectedNode.data) {
      this.router.navigateByUrl(selectedNode.data);
    } else {
      console.log('Node selected:', selectedNode);
    }
  }

  ref: DynamicDialogRef | undefined;



  showContractsListDialog() {
    this.ref = this.dialogService.open(ContractListDialogComponent, {
      header: 'Select Contract',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      styleClass: 'png-dialogbox',
      baseZIndex: 10000,
      modal: true,
      closable: true,
      footer: '.'
    });
  }
}

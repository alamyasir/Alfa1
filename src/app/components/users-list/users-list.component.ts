import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddUserDialogComponent } from '../../popups/add-user-dialog/add-user-dialog.component';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [PrimeNgModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
    providers: [MessageService],
})
export class UsersListComponent {
      constructor(private router: Router, public dialogService: DialogService , private messageService: MessageService) {}
  
  tableHeaders: { field: string; header: string }[] = [
    { field: 'userno', header: '#' },
    { field: 'userName', header: 'User Name' },
    { field: 'role', header: 'Role' },
    { field: 'Email', header: 'Email' },
    { field: 'phoneno', header: 'Phone Number' },
    { field: 'status', header: 'Status' },
    { field: 'projects', header: 'Assigned Projects' },
    { field: 'actions', header: 'Actions' },
  ];

  ///Table Data
  products: any[] = [
    {
      userno: 'Q-0002',
      userName: 'Syed Imran Haider',
      role: 'Admin',
      Email: 'syedimran@gmail.com',
      phoneno: '(629) 555-0125',
      status: 'Active',
      projects: '4',
    },
    {
      userno: 'Q-0002',
      userName: 'Syed Imran Haider',
      role: 'Admin',
      Email: 'syedimran@gmail.com',
      phoneno: '(629) 555-0125',
      status: 'Pending',
      projects: '4',
    },
  ];
    ref: DynamicDialogRef | undefined;
    
      showAddUserDialog() {
        this.ref = this.dialogService.open(AddUserDialogComponent, {
          header: 'Add User',
          width: '40%',
          contentStyle: { overflow: 'auto' },
          styleClass: 'png-dialogbox',
          baseZIndex: 10000,
          modal: true,
          closable: true,
          footer: '.',
        });
      }
      showDeleteDialog() {
         this.messageService.add({
           severity: 'error',
           summary: 'Delete Action',
           detail: 'Are you sure you want to delete this item?',
         });
          this.ref = this.dialogService.open(DeleteDialogComponent, {
            width: '30%',
            contentStyle: { overflow: 'auto' },
            styleClass: 'png-dialog, png-dialog-no-header',
            baseZIndex: 10000,
            maximizable: false,
            closable: false,
            footer: '.'
          });
      }
}

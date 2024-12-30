import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

interface Type {
  name: string;
  code: string;
}


@Component({
  selector: 'app-add-document-dialog',
  standalone: true,
  imports: [PrimeNgModule, HttpClientModule],
  templateUrl: './add-document-dialog.component.html',
  styleUrl: './add-document-dialog.component.scss',
  providers: [MessageService],
})
export class AddDocumentDialogComponent {
  constructor(private ref: DynamicDialogRef , private messageService: MessageService) {}

  doctype!: Type[];

  selectedtype!: Type;

  ngOnInit() {
    this.doctype = [
      { name: 'Type 1', code: '1' },
      { name: 'Type 2', code: '2' },
    ];
  }

  onDialogClose() {
    this.ref.close();
  }
  uploadedFiles: any[] = [];

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}

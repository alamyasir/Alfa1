import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-import-items',
  standalone: true,
  imports: [PrimeNgModule, HttpClientModule],
  templateUrl: './import-items.component.html',
  styleUrl: './import-items.component.scss',
  providers: [MessageService],
})
export class ImportItemsComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

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

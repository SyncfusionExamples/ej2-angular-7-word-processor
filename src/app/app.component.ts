import { Component, ViewChild } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToolbarService]
})
export class AppComponent {
  title = 'angular7-app';
  public serviceLink: string;
  ngOnInit() {
    //Service URL is required for opening word documents in DocumentEditor
    //Documenation link: https://ej2.syncfusion.com/angular/documentation/document-editor/import/?no-cache=1#convert-word-documents-into-sfdt
    this.serviceLink = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/import';
  }
}

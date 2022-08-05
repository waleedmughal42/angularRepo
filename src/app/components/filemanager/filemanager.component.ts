import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFileManagerComponent, DxFileManagerModule, DxPopupModule } from 'devextreme-angular';

class FileItem {
  name: string | undefined;

  isDirectory: boolean | undefined;

  size?: number;

  items?: FileItem[];
}

const fileItems: FileItem[] = [{
  name: 'Documents',
  isDirectory: true,
  items: [{
    name: 'Projects',
    isDirectory: true,
    items: [{
      name: 'About.rtf',
      isDirectory: false,
      size: 1024,
    }, {
      name: 'Passwords.rtf',
      isDirectory: false,
      size: 2048,
    }],
  }, {
    name: 'About.xml',
    isDirectory: false,
    size: 1024,
  }, {
    name: 'Managers.rtf',
    isDirectory: false,
    size: 2048,
  }, {
    name: 'ToDo.txt',
    isDirectory: false,
    size: 3072,
  }],
}, {
  name: 'Images',
  isDirectory: true,
  items: [{
    name: 'logo.png',
    isDirectory: false,
    size: 20480,
  }, {
    name: 'banner.gif',
    isDirectory: false,
    size: 10240,
  }],
}, {
  name: 'System',
  isDirectory: true,
  items: [{
    name: 'Employees.txt',
    isDirectory: false,
    size: 3072,
  }, {
    name: 'PasswordList.txt',
    isDirectory: false,
    size: 5120,
  }],
}, {
  name: 'Description.rtf',
  isDirectory: false,
  size: 1024,
}, {
  name: 'Description.txt',
  isDirectory: false,
  size: 2048,
}];


 class FileItems {
      // name: "Documents",
      // isDirectory: true,
      // items: [{
      //     name: "Projects",
      //     isDirectory: true,
      //     items: [{
      //         name: "About.rtf",
      //         isDirectory: false,
      //         size: 1024
      //     }, {
      //         name: "Passwords.rtf",
      //         isDirectory: false,
      //         size: 2048
      //     }]
      // }, {
      //     name: "About.xml",
      //     isDirectory: false,
      //     size: 1024
      // }]
    name: any;
    isDirectory: any;
    size?: number;
    items?: FileItem[];
    id: number | undefined;
    parentId: number | undefined;
    dateModified?: Date;
    // status?: string;
    // questions: number;
    // reviewStatus:string;
  }; 

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.css']
})
export class FilemanagerComponent implements OnInit {
  @ViewChild(DxFileManagerComponent, { static: false }) fileManager: DxFileManagerComponent | undefined;
  fileItems: FileItem[] = fileItems;
  constructor() { }
  
  ngOnInit(): void {
    
  }

}

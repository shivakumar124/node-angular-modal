import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { ProductService } from '../product.service';
const URL = 'http://localhost:3001/api/upload';
const geturl = 'http://localhost:3001/api';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  public getAttachment:FileUploader = new FileUploader({url: geturl, itemAlias: 'photo'});

  constructor(private bs: ProductService) { }

  ngOnInit() {
    this.bs
    .getattchments()
    .subscribe((data: FileUploader[]) => {
      console.log("productList", data)
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         
         alert('File uploaded successfully');
     };
 
  }

}

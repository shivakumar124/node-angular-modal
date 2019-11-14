import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
// import * as material from '@angular/material'
// import {MatDialogModule} from '@angular/material/dialog';
// import { SidebarModule } from 'ng-sidebar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SidebarModule } from 'ng-sidebar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AttachmentComponent } from './attachment/attachment.component';
import { FileSelectDirective, FileDropDirective  } from 'ng2-file-upload';
// import {DataTableModule} from "angular-6-datatable";

// import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    GetproductComponent,
    EditproductComponent,
    AttachmentComponent,
    FileSelectDirective,
    FileDropDirective
    
    // material.MatDialogModule
    // SidebarModule
    //  MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SidebarModule.forRoot(),
    InfiniteScrollModule,
    // DataTableModule
    // material.MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

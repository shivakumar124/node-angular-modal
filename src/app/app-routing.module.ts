import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

const routes: Routes = [
  {
    path: 'product/create',
    component: AddproductComponent
  },
  {
    path: 'product/edit/:id',
    component: EditproductComponent
  },
  {
    path: 'product',
    component: GetproductComponent
  },
  {
    path: 'attachment',
    component: AttachmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SlimLoadingBarModule],

  exports: [RouterModule]
})

export class AppRoutingModule { }
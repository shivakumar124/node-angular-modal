
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GetproductComponent } from '../getproduct/getproduct.component';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  modalRef: BsModalRef
  public show:boolean = false;
  display = 'none'
  product: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    //  private  modalRef: BsModalRef,
    private modalService: BsModalService,
    private router: Router,
    private bs: ProductService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      productname: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  ngOnInit() {
    // this.route.params.subscribe(params => {
    //     this.bs.editProduct(params['id']).subscribe(res => {
    //       console.log("edit data id details",res)
    //       this.product = res;
    //   });
    // });
  }
  closeModalDialog() {
    this.show= true;
    // this.display='block';
    // this.modalService.hide
    // this.display = 'none'; //set none css after close dialog
  }
  updateProduct(productname, price, description,id) {
    this.route.params.subscribe(params => {
      this.bs.updateProduct(productname, price, description, id);

      //  window.location.reload();
    });
  }
  // editProduct(id) {
  //   this.bs.editProduct(id).subscribe(res => {
  //     console.log("edit success", res)
  //     this.product = res;
  //     this.modalRef = this.modalService.show(EditproductComponent);

  //   });
  // }


}

import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService}  from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private bs: ProductService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      productname: ['', Validators.required ],
      price: ['', Validators.required ],
      description: ['', Validators.required ]
    });
  }
  addProduct(productname, price, description) { 
    this.bs.addProduct(productname, price, description);
  }
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { error } from 'util';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

//import { } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  // uri = 'http://localhost:4200/product';
  uri = 'http://localhost:3001';
  
    url ='http://localhost:3001/files';
  constructor(private http: HttpClient,private router: Router,) { }

  addProduct(productname, price, description) {
    const obj = {
      // productname: productname,
      // price: price,
      // description: description
      productname:"mobile",
      price:"15000",
      description:"new features"
    };
    console.log(obj);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'applicaion/json' })
    }
    // let headers= new Headers();
    this.http.post(`${this.uri}/CreateProduct`, obj)
      .subscribe(res => console.log('product added successfully'));
     
     
      // this.router.navigate(['/product']);
      
      alert("Product added successfully")
      window.location.reload();
  }

  getproductes() {
    return this
      .http
      .get(`${this.uri}/GetAllProducts`);
  }

  getattchments() {
    return this
      .http
      .get(`${this.uri}/GetAllAttachments`);
  }
  editProduct(id) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'applicaion/json' })
    }
    return this
      .http
      .get(`${this.uri}/GetOneProduct/${id}`);
  }
  deleteProduct(id) {
    return this
      .http
      .delete(`${this.uri}/DeleteProduct/${id}`)
    // .subscribe(res => console.log('Product Deleted successfully'));
  }
  updateProduct(productname, price, description, id) {
    // alert("sure to update"+id)
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'applicaion/json' })
    // }
    let obj = {
      productname: productname,
      price: price,
      description: description
    };
    this
      .http
      .put(`${this.uri}/UpdateProduct/${id}`, obj).subscribe(
        (data) =>
        console.log("Updated success"),
        
        //  console.log("Updated data:",data), // success path
        error => console.log("Updated error: ", error) // error path
      );
     this.router.navigate(['/product/create']);
      // alert("Product Updated successfully")
      //  window.location.reload();
      // this.router.navigate(['/product']);
      
     
    // .subscribe(res => console.log('Updated success'));
  }

}

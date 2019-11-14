import { Component, OnInit } from '@angular/core';
import Product from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditproductComponent } from '../editproduct/editproduct.component';
// const nisPackage = require('../../package.json');


@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css'],
 
  
 
})
export class GetproductComponent implements OnInit {
 
  private noOfItemsToShowInitially: number = 6;
  private itemsToLoad: number = 10;
 
//  public productlist = this.items.slice(0, this.noOfItemsToShowInitially);
 public isFullListDisplayed: boolean = false;
 
  
 
  modalRef: BsModalRef;
  productlist: Product[];
  product: any = {};
  // modalService: any;
  

  // nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];
  constructor(private bs: ProductService,
    private route: ActivatedRoute,
     private router: Router,
     
     private modalService: BsModalService) {
     
      }

  ngOnInit() {
    this.bs
      .getproductes()
      .subscribe((data: Product[]) => {
        console.log("productList", data)
        // this.productlist = data;
        
         this.productlist= data.slice(0,this.noOfItemsToShowInitially);
      });
  }
 
  
  // appendItems(startIndex, endIndex) {
  //   this.addItems(startIndex, endIndex, 'push');
  // }
  
  // prependItems(startIndex, endIndex) {
  //   this.addItems(startIndex, endIndex, 'unshift');
  // }

  onScrollUp() {
    console.log('scrolled up!');
    let len = this.productlist.length;
    this.bs.getproductes().subscribe((data: Product[]) => {
      let length=data.length-len;
          this.productlist= data.slice(len,this.noOfItemsToShowInitially);
         console.log("22",this.productlist)
    }) ;
    this.bs.getproductes().subscribe((data: Product[]) => {
    this.productlist= data.slice(len,18);
    });
    this.bs.getproductes().subscribe((data: Product[]) => {
      this.productlist= data.slice(len,18);
      });
    
    
  }
  
  onScrollDown() {
  debugger
  
    // if(this.noOfItemsToShowInitially <= this.productlist.length) {
      let len = this.productlist.length;
      // this.noOfItemsToShowInitially += this.itemsToLoad;
      this.bs.getproductes().subscribe((data: Product[]) => {
        let length=data.length-len;
        // let start = (this.noOfItemsToShowInitially - 1) * this.itemsToLoad;
        // let end = this.itemsToLoad > -1 ? (start + length) : data.length;
        // this.productlist= data.slice(start, end);
        // this.productlist = this.data.slice(length, this.noOfItemsToShowInitially);
          //  this.productlist= data.slice(len,this.noOfItemsToShowInitially);
            this.productlist= data.slice(len,18);
           console.log("22",this.productlist)
          // for(var i=1;i<=6;i++){
          //   this.productlist= data.slice(0,this.noOfItemsToShowInitially);
            
              // this.productlist.push(this.product[i]);
          //  }
          //  this.productlist= data.slice(0,this.itemsToLoad);
          // this.productlist=this.productlist.slice(0,len);
      }) ;
      this.bs.getproductes().subscribe((data: Product[]) => {
      this.productlist= data.slice(len,18);
      });
      this.bs.getproductes().subscribe((data: Product[]) => {
        this.productlist= data.slice(len,18);
        });
      // this.productlist = this.productlist.slice(0, this.noOfItemsToShowInitially);
      // for(var i=len;i<=len+10;i++){
      //   this.productlist.push(this.product[i]);
      // }
      console.log("scrolled");
    // } else {
    //   this.isFullListDisplayed = true;
    // }
  }

  deleteProduct(id) {

    this.bs.deleteProduct(id).subscribe(res => {
      alert("Delete Successfully")
      window.location.reload();
      // this.router.navigate(['/product']);
      console.log('Deleted');
    });
  }
  // editProduct(id) {
  //   this.bs.editProduct(id).subscribe(res => {
  //     console.log("##edit success", res)
  //     this.product=res
  //     this.modalRef = this.modalService.show(EditproductComponent);
  //     this.modalRef.content.product=this.product 
  //   });

  // }
  editProduct(id){
  this.route.params.subscribe(params => {
    this.bs.editProduct(id).subscribe(res => {
      console.log("##edit success", res)
      this.product=res
      this.modalRef = this.modalService.show(EditproductComponent);
      this.modalRef.content.product=this.product 
    });
    });
  }
  
  // const httpOptions={
  //   headers: new HttpHeaders({'Content-Type':'applicaion/json'})
  //  }
  // this.bs.editProduct(id).subscribe(res => {
  //   this.router.navigate(['/product/edit/',id]);
  //   console.log('edit');
  // });
}

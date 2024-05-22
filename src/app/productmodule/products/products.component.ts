import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ngOnInit(): void {
    this.getProducts()
  }

  constructor(private apiSer:ApiServiceService)
  {}

  producstHolder :any;
  productCredentials = {
    "categoryid":"",
    "MobileNumber":""
  }

  getProducts()
  {
    this.productCredentials.categoryid = "_000000001";
    this.productCredentials.MobileNumber = "9953668865";

    this.apiSer.getProducts(this.productCredentials).subscribe((res) =>{
    this.producstHolder = res;
    console.log(this.producstHolder)
    })

  }

}

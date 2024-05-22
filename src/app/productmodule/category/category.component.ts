import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  ngOnInit(): void {
    this.getallcategories()
  }

  constructor(private apiSer:ApiServiceService){}

  catResponse: any; 

  catCredentials = {
    Categoryid: "",
    MobileNumber: ""
  };

  getallcategories()
  {
    this.catCredentials.Categoryid = '0',
    this.catCredentials.MobileNumber = "9953668865"

    this.apiSer.getCategories(this.catCredentials).subscribe((res) => {
    this.catResponse = res;
   })
  }

}

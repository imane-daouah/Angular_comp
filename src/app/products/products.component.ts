import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  public products : any ;
  public keyword : string = "" ;

  constructor() { }
  ngOnInit() :void{
    this.products =  [
      {"id": 1, "name": "computer", "price": 40},
      {"id": 2, "name": "laptop", "price": 50},
      {"id": 3, "name": "tablet", "price": 30},
      {"id": 4, "name": "phone", "price": 20},
      {"id": 5, "name": "watch", "price": 10},
      {"id": 6, "name": "television", "price": 60},
      {"id": 7, "name": "camera", "price": 70},]
 

}
deleteProduct(p: any) {
  let index = this.products.indexOf(p);
  this.products.splice(index, 1);
  }

  search(): void {
    console.log(this.keyword);
    let result: any[] = [];
    for (let p of this.products) {
      if (p.name.includes(this.keyword)) {
        result.push(p);
      }
    }
    this.products = result;
  }
  searchh(): void {
    this.products = this.products.filter((p: any) => p.name.includes(this.keyword));
  }
  
  
}

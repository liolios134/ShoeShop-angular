import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products:any = [];
  public search: string = "";

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/products")
      .subscribe(response => {
        this.products = response;
        console.log(response);
      });
  }

}

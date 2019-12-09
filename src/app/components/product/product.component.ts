import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product:any ={};

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.http.get("https://simple-api.develobird.gr/products/" + params.productId)
        .subscribe(response => {
          this.product = response;
          console.log(response)
        });
    });
  }

}

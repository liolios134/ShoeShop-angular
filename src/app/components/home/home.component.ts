import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home:any = [];
  public customOptions: OwlOptions ={
    loop:true,
    dots:true,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
  };
  constructor(private http:HttpClient) { }

  ngOnInit() {

      this.http.get("http://localhost:3000/homy")
        .subscribe(response => {
          this.home = response;
          console.log(response);
        });

    }
}

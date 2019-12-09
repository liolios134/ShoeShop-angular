import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public about:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get("https://simple-api.develobird.gr/about")
      .subscribe(response => {
        this.about = response;
        console.log(response);
      });

  }

}

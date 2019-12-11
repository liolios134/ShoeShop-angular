import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ProductComponent } from './components/product/product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {FormsModule} from '@angular/forms';
import { BoxComponent } from './components/box/box.component';
import { BoxesComponent } from './components/boxes/boxes.component';


const routes= [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path: "products/:productId",
    component: ProductComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"boxes",
    component:BoxesComponent
  }


];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    ProductComponent,
    BoxComponent,
    BoxesComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMBCo_h4xE8vRCDagsr3f8y8qMwk6-dUo'
    }),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule,
    FilterPipeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

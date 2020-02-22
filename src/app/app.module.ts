import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { ElectonicComponent } from './electonic/electonic.component';
import { ClothesComponent } from './clothes/clothes.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FootwareComponent } from './footware/footware.component';
import { WatchesComponent } from './watches/watches.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { WomensComponent } from './womens/womens.component';
import { MensComponent } from './mens/mens.component';
import { KidsComponent } from './kids/kids.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
  
    ContactComponent,
    ElectonicComponent,
    ClothesComponent,
    GroceriesComponent,
    AccessoriesComponent,
    FootwareComponent,
    WatchesComponent,
    MobilesComponent,
    TvComponent,
    WomensComponent,
    MensComponent,
    KidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';

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


const routes: Routes = [
  {path:'',component:HomeComponent},
    {path:'newuser',component:SignUpComponent},
    {path:'existinguser',component:LoginComponent},
    {path:'cat',component:CategoryComponent},
    {path:'contact',component:ContactComponent},
    {path: 'prdt',component:ProductComponent},
    {path:'ele',component:ElectonicComponent},
    {path:'clth',component:ClothesComponent},
    {path:'gre',component:GroceriesComponent},
    {path:'ac',component:AccessoriesComponent},
    {path:'foot',component:FootwareComponent},
    {path:'wat',component:WatchesComponent},
    {path:'mb',component:MobilesComponent},
    {path:'tv',component:TvComponent},
    {path:'wm',component:WomensComponent},
    {path:'men',component:MensComponent},
    {path:'kid',component:KidsComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

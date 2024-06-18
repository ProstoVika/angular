import { NgModule } from '@angular/core';
import {ProductNewComponent} from "./product-new.component";
import {RouterModule} from "@angular/router";



const routes = [
    { path: '', component: ProductNewComponent },
    { path: 'product-new', component: ProductNewComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductNewRoutingModule {}

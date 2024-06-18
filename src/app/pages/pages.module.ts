import {NgModule} from "@angular/core";
import {MainPageComponent} from "./main-page/main-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {DescriptionLimitPipe} from "../pipes/description-limit.pipe";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProductNewComponent} from "./product-new/product-new.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {ProductNewModule} from "./product-new/product-new.module";

@NgModule({
  declarations: [
    MainPageComponent,
    ContactPageComponent,
    DescriptionLimitPipe,


  ],
  exports: [
    DescriptionLimitPipe,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // ProductNewModule,

  ]
})
export class PagesModule { }

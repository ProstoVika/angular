import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductNewComponent} from "./product-new.component";
import {ImageModule} from "primeng/image";
import {PagesModule} from "../pages.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductNewComponent,
    // DescriptionLimitPipe,
  ],
  exports: [
    ProductNewComponent
  ],
    imports: [
        CommonModule,

        RouterModule.forChild([
            {path: '', component: ProductNewComponent}
        ]),
        ImageModule,
        PagesModule,
        FormsModule,
      ReactiveFormsModule, ////////not sure
    ]
})
export class ProductNewModule { }

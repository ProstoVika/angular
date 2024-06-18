import {NgModule} from "@angular/core";
import {CheckoutComponent} from "./checkout.component";
import {CommonModule} from "@angular/common";
import {CheckoutRoutingModule} from "./checkout-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";




@NgModule({
  declarations: [
    CheckoutComponent,

  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,

  ],

})

export class CheckoutModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";



const routes: Routes = [
    { path: '', component: CheckoutComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatStepperModule,
    ReactiveFormsModule
  ],

  exports: [RouterModule],

})
export class CheckoutRoutingModule { }

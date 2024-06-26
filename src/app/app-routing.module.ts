import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {ProductDetailsPageComponent} from "./pages/product-details-page/product-details-page.component";
import {NgModule} from "@angular/core";
import {AdviceComponent} from "./pages/advice-page/advice.component";
import {ThankYouComponent} from "./pages/thank-you/thank-you.component";





const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'advice-page', component: AdviceComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailsPageComponent },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'product-new', loadChildren: () => import('./pages/product-new/product-new.module').then(m => m.ProductNewModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

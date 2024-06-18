import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProductDetailsPageComponent} from "./pages/product-details-page/product-details-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";

import {NgxImageZoomModule} from "ngx-image-zoom";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import {AdviceComponent} from "./pages/advice-page/advice.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ThankYouComponent} from "./pages/thank-you/thank-you.component";
import {PagesModule} from "./pages/pages.module";
import {ImageModule} from "primeng/image";
import {ProductNewModule} from "./pages/product-new/product-new.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDetailsPageComponent,
    FooterComponent,
    CartComponent,
    AdviceComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgxImageZoomModule,
    FormsModule,
    BrowserAnimationsModule,
    ImageModule,
    ProductNewModule,

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

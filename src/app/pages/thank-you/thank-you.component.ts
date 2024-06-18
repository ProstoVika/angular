import {Component, OnInit} from '@angular/core';
import {CartService} from "../../components/cart/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
  }

  createNewOrder(): void {
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}

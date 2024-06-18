import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup,  Validators} from '@angular/forms';
import {CartService} from '../../components/cart/cart.service';
import {ProductInterface} from '../../interfaces/interface';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { MatStepper} from "@angular/material/stepper";
import {forbiddenNameValidator} from "./forbidden-name.directive";
import {Router} from "@angular/router";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})

export class CheckoutComponent implements OnInit, OnDestroy {
    angForm!: FormGroup;
    currentStep: number = 1;
    private $cartItems = new BehaviorSubject<ProductInterface[]>([]);
    private onDestroy$ = new Subject<void>();
    total: number = 0;
    firstFormGroup!: FormGroup;
    secondFormGroup!: FormGroup;
    thirdFormGroup!: FormGroup;
    isLinear = false;
    orderPlaced: boolean = false;
    isPaymentDisabled: boolean = true;
    constructor(
        private fb: FormBuilder,
        private cartService: CartService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.createForm();
        this.subscribeToCartItems();
        this.subscribeToFormChanges();
    }

    createForm() {
        this.angForm = this.fb.group({});
        this.firstFormGroup = this.fb.group({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(1),
                forbiddenNameValidator(/dima/i),
              Validators.pattern('^[a-zA-Z ]*$'),
            ]),
            address: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
            ]),
            zip: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('^[\\w-]+(\\.[\\w-]+)*@([\\w-]+\\.)+[a-zA-Z]{2,7}$'),
            ]),
        });

        this.secondFormGroup = this.fb.group({
            payment: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.pattern('^((?:[A-Za-z]+ ?){1,3})$'),
            ]),
            card: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
              Validators.pattern('^\\d+'),
            ]),
            exp: new FormControl('', [
                Validators.required,
                Validators.maxLength(5),
                 Validators.pattern('^(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})$'),
            ]),

            cvc: new FormControl('', [
                Validators.required,
                Validators.maxLength(3),
              Validators.pattern('^[0-9]{3}$'),
            ]),

        });
        this.thirdFormGroup = this.fb.group({
            deliveryDate: new FormControl('', [

            ]),
        });
    }

    get name() {
        return this.firstFormGroup.get('name');
    }

    get address() {
        return this.firstFormGroup.get('address');
    }

    get zip() {
        return this.firstFormGroup.get('zip');
    }
    get email() {
        return this.firstFormGroup.get('email');
    }
    get payment() {
        return this.secondFormGroup.get('payment');
    }

    get card() {
        return this.secondFormGroup.get('card');
    }

    get exp() {
        return this.secondFormGroup.get('exp');
    }

    get cvc() {
        return this.secondFormGroup.get('cvc');
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    get cartItems$(): Observable<ProductInterface[]> {
        return this.$cartItems.asObservable();
    }

    resetStepper(stepper: MatStepper) {
        stepper.reset();
    }

    private subscribeToCartItems(): void {
        this.cartService.cartItems$
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((items: ProductInterface[]) => {
                this.$cartItems.next(items);
                this.calculateTotal();
            });
    }

    private calculateTotal(): void {
        this.cartItems$.subscribe((items) => {
            this.total = items.reduce(
                (sum, product) =>
                    sum + (product.price * (product.quantity || 1)),
                0
            );
        });
    }

    getSubtotal(item: ProductInterface): number {
        return this.cartService.getSubtotalOne(item);
    }

    decreaseQuantity(item: ProductInterface): void {
        this.cartService.decrementQuantity(item);
        this.calculateTotal();
    }

    increaseQuantity(item: ProductInterface): void {
        this.cartService.incrementQuantity(item);
        this.calculateTotal();
    }

    removeFromCart(productId: number, selectedColor: string, selectedSize: string): void {
        this.cartService.removeItem(productId, selectedColor, selectedSize);
    }

    nextStep(): void {
        if (this.currentStep < 2) {
            this.currentStep++;
        }
    }

    checkFormValidity(): void {
        this.isPaymentDisabled = !(this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid);
    }
    subscribeToFormChanges(): void {
        this.firstFormGroup.valueChanges.subscribe(() => this.checkFormValidity());
        this.secondFormGroup.valueChanges.subscribe(() => this.checkFormValidity());
        this.thirdFormGroup.valueChanges.subscribe(() => this.checkFormValidity());
    }
    payForOrder(): void {
        this.orderPlaced = true;
        this.cartService.clearCart();
        this.router.navigate(['/thank-you']);
    }
}

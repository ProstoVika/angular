import { Component } from '@angular/core';
import {ProductNewService} from "./product-new.service";
import {NewProductInterface} from "../../interfaces/interface";
import {DescriptionLimitPipe} from '../../pipes/description-limit.pipe';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MainPageService} from "../main-page/main-page.service";


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss'],
  providers: [DescriptionLimitPipe]
})
export class ProductNewComponent {
  productForm: FormGroup;
  images: string[] = [];
  title = 'Lazy loading feature modules';
  newProduct: NewProductInterface = {
    id: 0,
    images: [],
    price: 0,
    discount: 0,
    imgUrl: '',
    main: false,
    shop: '',
    name: '',
    description: '',
    shipping: null,
    discountUntil: 0,
    isNew: false,
    color: [],
    size: [],
    productColors: [],
    selectedColor: '',
    productSizes: [],
    selectedSize: '',
    rating: 0,
    quantity: 0,
    total: 0
  };

  constructor(private productService: ProductNewService, private mainPageService: MainPageService) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      discount: new FormControl('', Validators.required),
      images: new FormControl(null),
      main: new FormControl(false),
      shop: new FormControl(''),
      shipping: new FormControl(''),
      discountUntil: new FormControl(new Date()),
      isNew: new FormControl(false),
      color: new FormControl(''),
      size: new FormControl(''),
      productColors: new FormControl([]),
      selectedColor: new FormControl(''),
      sizeXS: new FormControl(false),
      sizeS: new FormControl(false),
      sizeM: new FormControl(false),
      sizeL: new FormControl(false),
      sizeXL: new FormControl(false),
      productSizes: new FormControl([]),
      selectedSize: new FormControl(''),
      rating: new FormControl(0),
      quantity: new FormControl(0),
      total: new FormControl(0),
    });
  }

    createNewProduct(): void {
        if (this.productForm.valid) {
            const selectedSizes: string[] = [];
            if (this.productForm.value.sizeXS) selectedSizes.push('XS');
            if (this.productForm.value.sizeS) selectedSizes.push('S');
            if (this.productForm.value.sizeM) selectedSizes.push('M');
            if (this.productForm.value.sizeL) selectedSizes.push('L');
            if (this.productForm.value.sizeXL) selectedSizes.push('XL');

            const newProduct: NewProductInterface = {
                id: 0,
                images: this.newProduct.images,
                price: this.productForm.value.price,
                discount: this.productForm.value.discount,
                imgUrl: '',
                main: this.productForm.value.main,
                shop: this.productForm.value.shop,
                name: this.productForm.value.name,
                description: this.productForm.value.description,
                shipping: this.productForm.value.shipping,
                discountUntil: this.productForm.value.discountUntil,
                isNew: this.productForm.value.isNew,
                color: this.productForm.value.color,
                size: selectedSizes,
                productColors: this.productForm.value.productColors,
                selectedColor: this.productForm.value.selectedColor,
                productSizes: [
                    this.productForm.value.sizeXS ? 'XS' : '',
                    this.productForm.value.sizeS ? 'S' : '',
                    this.productForm.value.sizeM ? 'M' : '',
                    this.productForm.value.sizeL ? 'L' : '',
                    this.productForm.value.sizeXL ? 'XL' : ''
                ].filter(size => size !== ''),
                selectedSize: this.productForm.value.selectedSize,
                rating: this.productForm.value.rating,
                quantity: this.productForm.value.quantity,
                total: this.productForm.value.total
            };

            console.log('New Product:', newProduct);
            this.mainPageService.addNewProduct(newProduct);
        }
    }
  addImage(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = URL.createObjectURL(file);
        const imageObject = { imgUrl: imageUrl, alt: 'Image' };
        this.newProduct.images.push(imageObject);
      }
    }
  }
}

import {Injectable} from "@angular/core";
import {data} from "../../../assets/data";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {NewProductInterface, ProductInterface} from "../../interfaces/interface";


@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  private productsData$: (ProductInterface | any)[] = data;
  data$: BehaviorSubject<ProductInterface[]> = new BehaviorSubject<ProductInterface[]>([]);

  constructor() {
    this.data$.next(this.productsData$);
  }

  addNewProduct(newProduct: NewProductInterface): void {
    this.productsData$.push(newProduct);
    this.data$.next(this.productsData$);
  }
}


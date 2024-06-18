import {Component, OnInit} from "@angular/core";
import {ProductInterface} from "../../interfaces/interface";
import {MainPageService} from "./main-page.service";
import {CurrencyPipe} from "@angular/common";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [CurrencyPipe],
})

export class MainPageComponent implements OnInit {
  data$: BehaviorSubject<ProductInterface[]>;
  constructor(private mainPageService: MainPageService) {
    this.data$ = new BehaviorSubject<ProductInterface[]>([]);
  }

  ngOnInit(): void {
    this.data$ = this.mainPageService.data$;
  }
}


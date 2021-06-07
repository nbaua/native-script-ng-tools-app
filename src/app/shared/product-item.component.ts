import { Component, Input, OnInit } from "@angular/core";
import { ProductItem } from "./product-item";

@Component({
    selector: "product-item",
    templateUrl: "./product-item.component.html",
    styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
    @Input() item: ProductItem;
    @Input() index: number;

    itemBackgroundColor: string;

    ngOnInit(): void {
        this.itemBackgroundColor = this.index % 2 === 0 ? "#f1f1f1" : "white";
    }

    constructor() {
        // tslint:disable-next-line: no-empty
    }
}

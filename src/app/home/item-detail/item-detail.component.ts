import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Subscription } from "rxjs";
import { OrderItem } from "~/app/shared/order-item.model";
import { OrderService } from "~/app/shared/order.service";
import { ProductItem } from "~/app/shared/product-item";
import { DataService } from "../../shared/data.service";
@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.scss"],
})
export class ItemDetailComponent implements OnInit, OnDestroy {
    item: ProductItem;
    orderItem: OrderItem;
    buttonTitle: string = "Place Order";

    private orderItemSubscription: Subscription;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private orderService: OrderService
    ) {}

    ngOnInit(): void {
        this.orderItemSubscription = this.orderService.orderItem.subscribe(
            (orderItem) => {
                this.orderItem = orderItem;
            }
        );
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
    }

    ngOnDestroy(): void {
        this.orderItemSubscription.unsubscribe();
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
    onSubmitTap(quantity): void {
        this.orderService.createOrder(this.item, quantity);
        console.log(this.orderItem, this.orderItem.orderQuantity);
    }
}

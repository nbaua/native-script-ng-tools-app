import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { OrderItem } from "./order-item.model";
import { ProductItem } from "./product-item";

@Injectable({
    providedIn: "root",
})
export class OrderService {
    private _orderItem = new BehaviorSubject<OrderItem>(null);
    private _orders: Array<OrderItem> = [];

    get orderItem() {
        return this._orderItem.asObservable();
    }

    createOrder(item: ProductItem, orderQuantity: number) {
        const order = new OrderItem(item, orderQuantity);
        const foundItem = this._orders.find(
            (i) => i.item.itemCode === item.itemCode
        );
        if (foundItem) {
            this._orders.map((x) => {
                foundItem.orderQuantity =
                    foundItem.orderQuantity + 0 + orderQuantity;
            });
        } else {
            this._orders.push(order);
        }
        this._orderItem.next(order);
    }

    getOrders() {
        return this._orders;
    }
}

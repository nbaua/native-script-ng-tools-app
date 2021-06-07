import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderItem } from "../shared/order-item.model";
import { OrderService } from "../shared/order.service";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
})
export class BrowseComponent implements OnInit {
    buttonTitle: string = "Place Orders";
    bookedOrders: Array<OrderItem> = [];

    constructor(private route: Router, private orderService: OrderService) {}

    ngOnInit(): void {
        this.bookedOrders = this.orderService.getOrders();
    }

    onSubmitTap(): void {
        if (this.bookedOrders.length > 0) {
            alert("Your orders have been placed.");
        } else {
            alert("Place orders first.");
        }
    }
}

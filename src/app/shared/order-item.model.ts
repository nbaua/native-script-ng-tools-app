import { ProductItem } from "./product-item";

export class OrderItem {
    constructor(
        public item: ProductItem,
        public orderQuantity: number = 1,
        orderDate: Date = new Date(),
        orderedBy: string = "ADMIN",
        orderedFor: string = "IMPORT"
    ) {}
}

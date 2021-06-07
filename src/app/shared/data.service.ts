import { Injectable } from "@angular/core";
import { ProductItem } from "./product-item";

@Injectable({
    providedIn: "root",
})
export class DataService {
    private items = new Array<ProductItem>(
        {
            category: "POWER TOOLS ACCESSORIES",
            description:
                "4PCS SDS Plus Hammer Drill Bits Set Size:6*110,6*160,8*160,10*160 Packed By Double Blister",
            itemCode: 6925582150483,
            priceLanding: 315,
            priceRetail: 450,
            productName: "4PCS Hammer Drill Bits Set",
            title: "TOTAL TOOLS 4PCS HAMMER DRILL BITS SET",
            totalCode: "TACSD1945",
        },
        {
            category: "HAND TOOLS",
            description:
                "Blade Size:18Mmx100mm With 1 Pcs SK4 Blade With Flat Push Button Packed By Sliding Card",
            itemCode: 6925582151961,
            priceLanding: 81,
            priceRetail: 115,
            productName: "Snap-Off Blade Knife",
            title: "TOTAL TOOLS SNAP OFF BLADE KNIFE",
            totalCode: "THT511806",
        },
        {
            category: "MEASURING TOOLS",
            description:
                "Size:7In*7In Material:ABS Only Inch Beveled Edge For Ease Of Reading Easy-To-Read Gradations Base Enable Easy Marking And Cutting Lightweight & High-Impact Structural Material Packed By Label",
            itemCode: 6925582153798,
            priceLanding: 245,
            priceRetail: 350,
            productName: "Angle Square",
            title: "TOTAL TOOLS ANGLE SQUARE",
            totalCode: "TMT61201",
        },
        {
            category: "HAND TOOLS",
            description:
                "Size:145Mm(5.5”) Material: Stainless Steel Blade Thickness:3.0Mm Unique Design Handle Sand Blast Surface Packed By Sliding Card",
            itemCode: 6925582153835,
            priceLanding: 175,
            priceRetail: 250,
            productName: "Electrician's Scissors",
            title: "TOTAL TOOLS ELECTRICIANS SCISSORS",
            totalCode: "THT1155871",
        },
        {
            category: "HAND TOOLS",
            description:
                "50Mm Wire Dia:1.3-1.5Mm Rod Dia:6.3Mm Packed By Double Blister",
            itemCode: 6925582154023,
            priceLanding: 123,
            priceRetail: 175,
            productName: "Nylon Brush",
            title: "TOTAL TOOLS NYLON BRUSH",
            totalCode: "TAC33025",
        }
    );

    getItems(): Array<ProductItem> {
        return this.items;
    }

    getItem(itemCode: number): ProductItem {
        return this.items.filter((item) => item.itemCode === itemCode)[0];
    }
}

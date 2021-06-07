import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { DataService } from "../shared/data.service";
import { ProductItem } from "../shared/product-item";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    searchPhrase: string;
    items: Array<ProductItem>;
    matchedResult: number | string = "0 matching products";

    constructor(private _itemService: DataService) {}

    ngOnInit(): void {
        this.items = this._itemService.getItems();

        this.showSearchResultCount();
    }

    onTextChanged(args): void {
        if (args.value) {
            this.searchPhrase = args.value;

            const filteredList = this._itemService.getItems().filter((e) => {
                return e.title.toLowerCase().includes(args.value.toLowerCase());
            });
            this.items = filteredList;
            this.showSearchResultCount();
        }
    }

    onSearchSubmit(args): void {
        this.hideKeyBoard(args);
        this.showSearchResultCount();
    }
    onSearchClear(args): void {
        const searchBar = args.object;
        searchBar.text = "";
        this.items = this._itemService.getItems();
        this.hideKeyBoard(args);
        this.showSearchResultCount();
    }
    private hideKeyBoard(args) {
        const searchBar = args.object;
        searchBar.dismissSoftInput();
    }

    searchBarLoaded(args) {
        const searchBar = args.object;
        if (isAndroid) {
            searchBar.android.clearFocus();
        }
    }
    private showSearchResultCount(): void {
        this.matchedResult = "showing " + this.items.length + " products";
    }
}

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptCommonModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { ProductItemComponent } from "./../shared/product-item.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HomeRoutingModule,
    ],
    declarations: [HomeComponent, ItemDetailComponent, ProductItemComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}

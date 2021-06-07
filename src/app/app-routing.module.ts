import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
    NativeScriptRouterModule,
    NSEmptyOutletComponent,
} from "@nativescript/angular";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home/default//browseTab:browse/default)",
        pathMatch: "full",
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/home/home.module").then((m) => m.HomeModule),
        outlet: "homeTab",
    },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab",
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}

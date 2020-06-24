import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "about", component: AboutComponent },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }

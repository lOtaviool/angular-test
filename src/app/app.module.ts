import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { App } from "./app";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./pages/home/home.module";
import { AddressModule } from "./pages/address/address.module";
import { Header } from "./components/header/header";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations:[
        App,
        Header
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule, 
        MatMenuModule,
        HomeModule,
        AddressModule
    ],
    exports:[],
    providers: [],
    bootstrap:[App]
})

export class AppModule{};
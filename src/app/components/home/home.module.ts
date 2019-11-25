import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from "./cart/cart.component";
import {ListComponent} from "./list/list.component";
import {SongComponent} from "./song/song.component";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {routing} from "./home-routing";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    CartComponent,
    ListComponent,
    SongComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    routing
  ],
  exports: [
    CartComponent,
    ListComponent,
    SongComponent,
    HomeComponent
  ]
})
export class HomeModule {
}

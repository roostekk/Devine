import { Component, OnInit } from '@angular/core';
import {SongModel} from "../../../models/song.model";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items: SongModel[] = [];

  constructor(
    private dataService: DataService
  ) {
    if (localStorage.hasOwnProperty('addedSongs')) {
      this.items = JSON.parse(localStorage.getItem('addedSongs'));
      dataService.sendSelectedSongs(this.items.map(e => e.id));
    }

    dataService.receiveSong.subscribe(song => {
      this.items.push(song);
      this.saveItemsToLocalStorage()
    })
  }

  removeItem(item) {
    const i = this.items.indexOf(item);
    this.items.splice(i, 1);
    this.saveItemsToLocalStorage();
    this.dataService.sendSelectedSongs(this.items.map(e => e.id));
  }

  saveItemsToLocalStorage() {
    localStorage.setItem('addedSongs', JSON.stringify(this.items))
  }
}

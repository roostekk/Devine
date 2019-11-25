import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SongModel} from "../../../models/song.model";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  songId: number;
  song: SongModel;

  isDisabled: boolean;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.songId = params.id
    });

    this.dataService.getSong(this.songId).subscribe(r => this.song = r);

    this.dataService.receiveSelectedSongs.subscribe(r => {
      this.isDisabled = r.includes(Number(this.songId));
    })
  }

  addToCart() {
    this.dataService.addSong(this.song);
    this.isDisabled = true;
  }

}

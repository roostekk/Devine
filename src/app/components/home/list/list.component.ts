import {Component, OnInit} from '@angular/core';
import {PlaylistModel} from "../../../models/playlist.model";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  playlist: PlaylistModel;
  playlistFiltered: PlaylistModel;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.getPlaylist().subscribe(r => {
      this.playlist = r;
    });
  }

}

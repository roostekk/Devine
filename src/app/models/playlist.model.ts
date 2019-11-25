import {SongModel} from './song.model';

export interface PlaylistModel {
  id: number;
  description: string;
  tracks: {
    data: SongModel[]
  };
}

export interface SongModel {
  id: number;
  title: string;
  artist: {
    name: string
  };
  album: {
    title: string,
    cover_medium: string,
    cover_xl: string,
  };
}

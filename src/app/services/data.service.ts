import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {PlaylistModel} from '../models/playlist.model';
import {SongModel} from '../models/song.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

  headers: HttpHeaders;
  apiKey = environment.apiKey;
  apiUrl = environment.apiUrl;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'x-rapidapi-key': this.apiKey
    })
  };

  private songSource = new Subject<SongModel>();
  receiveSong = this.songSource.asObservable();

  private selectedSongsSource = new BehaviorSubject<number[]>(null);
  receiveSelectedSongs = this.selectedSongsSource.asObservable();

  getPlaylist(): Observable<PlaylistModel> {
    return this.http.get<PlaylistModel>(`${this.apiUrl}playlist/1274663331`, this.httpOptions);
  }

  getSong(id: number): Observable<SongModel> {
    return this.http.get<SongModel>(`${this.apiUrl}track/${id}`, this.httpOptions);
  }

  addSong(song: SongModel): void {
    this.songSource.next(song);
  }

  sendSelectedSongs(selectedSongs: number[]): void {
    this.selectedSongsSource.next(selectedSongs);
  }
}

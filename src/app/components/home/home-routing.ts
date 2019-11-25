import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {SongComponent} from './song/song.component';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ListComponent },
      { path: 'list/song/:id', component: SongComponent },
    ]
  },
];

export const routing = RouterModule.forChild(routes);

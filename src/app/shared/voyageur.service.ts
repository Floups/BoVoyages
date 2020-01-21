import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Voyageur} from '../models/Voyageur';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoyageurService {

  constructor(private httpClient: HttpClient) {
  }

  getVoyageurs(): Observable<Voyageur[]> {
    return this.httpClient.get<Voyageur[]>('api/voyageurs');
  }

  getVoyageur(id): Observable<Voyageur> {
    return this.httpClient.get<Voyageur>('api/voyageurs/' + id);
  }

  createVoyageur(voyageur) {
    return this.httpClient.post<Voyageur>('api/voyageurs', voyageur);
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Dossier} from '../models/Dossier';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private httpClient: HttpClient) {
  }

  getDossiers(): Observable<Dossier[]> {
    return this.httpClient.get<Dossier[]>('api/dossiers');
  }

  getDossier(id): Observable<Dossier> {
    return this.httpClient.get<Dossier>('api/dossiers/' + id);
  }

  createDossier(dossier) {
    return this.httpClient.post<Dossier>('api/dossiers', dossier);
  }

  deleteDossier(id) {
    return this.httpClient.delete('api/dossiers/' + id);
  }

  updateDossier(dossier) {
    return this.httpClient.put('api/dossiers/' + dossier.id, dossier);
  }

}

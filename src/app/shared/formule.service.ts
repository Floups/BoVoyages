import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Formule} from '../models/Formule';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormuleService {

  constructor(private httpClient: HttpClient) {
  }

  getFormules(): Observable<Formule[]> {
    return this.httpClient.get<Formule[]>('api/formules');
  }

  getFormule(id): Observable<Formule> {
    return this.httpClient.get<Formule>('api/formules/' + id);
  }
}

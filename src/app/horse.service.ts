import { Injectable } from '@angular/core';
import { Horse } from '@app/_models/horse';
import { HORSES } from '@app/_helpers'
import { Observable, of } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';


const baseUrl = `${environment.apiUrl}/horses`;

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  constructor(private http: HttpClient) { }

  getHorses2(): Observable<Horse[]> {
    return of(HORSES);
  }
  
  getHorses() {
    return this.http.get<Horse[]>(baseUrl);
  }

  getHorse(id: number): Observable<Horse> {
    // TODO: send the message _after_ fetching the hero
    return of(HORSES.find(horse => horse.id === id));
  }

  getById(id: string) {
    return this.http.get<Horse>(`${baseUrl}/${id}`);
  }

  create(params) {
    return this.http.post(baseUrl, params);
  }
}

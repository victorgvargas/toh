import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crisis';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrisis(id: number): Observable<Crisis> {
    return of(CRISES.find(crisis => crisis.id === id)!);
  }

  getCrises(): Observable<Crisis[]> {
    const crisis = of(CRISES);
    this.messageService.add('HeroService: fetched crisis');
    return crisis;
  }
}

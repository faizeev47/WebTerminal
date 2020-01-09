import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Schedule } from './schedule';

import { SCHEDULE } from './mock-schedule';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor() { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      window.alert(`HeroService: ${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getSchedule(): Observable<Schedule[]> {
    return of(SCHEDULE);
  }

  getJourney(journeyId: number): Observable<Schedule> {
    return of(SCHEDULE.find(schedule => schedule.journeyId === journeyId));
  }

  reserveSeat(journeyId: number, nic: string): Observable<any> {
    return of(null);
  }

  buyTicket(journeyId: number, nic: string): Observable<any> {
    return of(null);
  }

  requestMeal(journeyId: number, nic: string, meal: string): Observable<any> {
    return of(null);
  }

}

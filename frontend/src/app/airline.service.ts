import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Schedule } from './schedule';

import { SCHEDULE } from './mock-schedule';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  private baseUrl = "http://localhost:3000/api/";
  private scheduleUrl = this.baseUrl + 'getSchedule';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private log(message: string) {
    this.messageService.add(`Airline Service: ${message}`)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`Airline Service: ${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.scheduleUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log("Fetched the schedule.")),
        catchError(this.handleError<Schedule[]>('getSchedule', []))
      );
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

  submitFeedback(feedback: string): Observable<any> {
    return of(null);
  }
}

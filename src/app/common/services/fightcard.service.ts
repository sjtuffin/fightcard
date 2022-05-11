import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FightCard } from '../models/fightcard';

@Injectable({
  providedIn: 'root',
})
export class FightCardService {
  dataURL: string = '/assets/data.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<FightCard>(this.dataURL)
      .pipe(catchError(this.handleError<any>('getData', [])));
  }

  /**
   * Handle failed Http operation and let app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // remote logging infrastructure logic, etc
      console.error(error);
      return of(result as T);
    };
  }
}

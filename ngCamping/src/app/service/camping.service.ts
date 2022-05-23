import { Camping } from './../models/camping';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampingService {

  private baseUrl = 'http://localhost:8087/';
  private url = environment.baseUrl + 'api/camp';

  newCamp: Camping = new Camping();

  constructor(
    private http: HttpClient,
  ) { }

  // getNumOfCamps() {
  //   return this.incompletePipe.transform(this.todos, this.showComplete).length;
  // }

  show(id: number){
    return this.http.get<Camping>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Could not return the list of camping for the user');
      })
    )
  }

  index(){
    return this.http.get<Camping[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError('Could not return the list of Camping for user')
      })
    );
  }

  create(newCamp: Camping){
      return this.http.post<Camping>(this.url, newCamp)
      .pipe(
        catchError(
          (err: any) => {
            console.log(err);
            return throwError('httpClient threw error creating pokemon');
          }));
  }

  update(camp: Camping){
    return this.http.put<Camping>(this.url + '/' + camp.id, camp)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Could not return the list of Todos for the user');
      }));
  }

  destroy(id: number){
    return this.http.delete<Camping>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Could not return the list of Todos for the user');
      }));
  }
}

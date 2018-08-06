import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Brand, Driver, RaceTeam} from '../shared/driver';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private BASE_URL="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getDriversList(): Observable<Driver[]>{
    return this.http.get<Driver[]>(this.BASE_URL+"/drivers");
  }
  getDriver(id: number): Observable<Driver>{
    return this.http.get<Driver>(this.BASE_URL+"/drivers/"+id);
  }
  addDriver(newDriver: Driver): Observable<Driver>{
    return this.http.post<Driver>( this.BASE_URL+"/drivers", newDriver);
  }

  getRaceTeam(): Observable<RaceTeam[]>{
    return this.http.get<RaceTeam[]>( this.BASE_URL+"/raceteam");
  }
  getSponsor(): Observable<Brand[]>{
    return this.http.get<Brand[]>( this.BASE_URL+"/sponsor");
  }

  removeDriver(id: number): Observable<any>{
    return this.http.delete<any>( this.BASE_URL+"/drivers/"+id);
  }

}

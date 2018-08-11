import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UserRights} from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private BASE_URL="http://localhost:3000";

    constructor(private http: HttpClient) { }

    addUser(newUser: User): Observable<User>{
        return this.http.post<User>( this.BASE_URL+"/users", newUser);
    }

    getAllUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.BASE_URL+"/users");
    }

    getUserRights(): Observable<UserRights[]>{
        return this.http.get<UserRights[]>(this.BASE_URL+"/userrights");
    }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '@model/users';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserDetailsService {
    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }

    /* get  users by name from API */
    getUser(): Observable<any> {
        return this.http.get<Users[]>(
            `${this.apiURL}/users`,
        );
    }
    /* get user details from API */
    getUserDetails(user: any): Observable<Users> {
        return this.http.get<Users>(
            `${this.apiURL}/userdetails?user=${user}`,
        );
    }
}

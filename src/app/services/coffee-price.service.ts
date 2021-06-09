import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '@model/coffee';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CoffeePriceService {
    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }

    /* get all countries from API */
    getAllPrices(): Observable<any> {
        return this.http.get<Coffee[]>(
            `${this.apiURL}/prices`,
        );
    }
}

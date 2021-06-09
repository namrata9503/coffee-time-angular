import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '@model/orders';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class OrdersService {
    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }

    /* get all orders from API */
    getAllOrders(): Observable<any> {
        return this.http.get<Orders[]>(
            `${this.apiURL}/orders`,
        );
    }
}

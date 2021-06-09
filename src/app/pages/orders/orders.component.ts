import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '@model/orders';
import { OrdersService } from '@services/users-orders.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
    orders$?: Observable<Orders[]>;

    constructor(private orderService: OrdersService) { }

    ngOnInit(): void {
        this.getOrders();
    }
    /* get all orders from orders.service and sorts it by ascending users */
    getOrders(): void {
        this.orders$ = this.orderService.getAllOrders();
    }
}

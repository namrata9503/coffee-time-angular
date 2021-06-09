import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Coffee } from '@model/coffee';
import { CoffeePriceService } from '@services/coffee-price.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    showModal = false;

    coffee$?: Observable<Coffee[]>;

    constructor(private coffeeService: CoffeePriceService,
        private router: Router) { }

    ngOnInit(): void {
        this.getCoffeePrices();
    }
    toggleModal() {
        this.showModal = ! this.showModal;
    }
    /* get all coffee prices from coffee.service */
    getCoffeePrices(): void {
        this.coffee$ = this.coffeeService.getAllPrices();
    }
    returnZero() {
        return 0;
    }

}

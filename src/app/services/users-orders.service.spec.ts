import { async, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Orders } from 'src/app/model/orders';
import { OrdersService } from './users-orders.service';

describe('UsersOrdersService', () => {
    let service: OrdersService;
    let http: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: service, useClass: OrdersService }],
            imports: [HttpClientModule, HttpClientTestingModule],
        });

        http = TestBed.inject(HttpTestingController);
        service = TestBed.inject(OrdersService);
    }));
    afterEach(() => {
        http.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('mock the HTTP get orders service', async(() => {
        const mockOrders = [
            {
                user: 'coach',
                drink: 'long black',
                size: 'medium',
            },
            {
                user: 'ellis',
                drink: 'long black',
                size: 'small',
            },
        ];
        service.getAllOrders().subscribe((data) => {
            const p = data.filter((u: Orders) => u.user == 'coach'); //  filters user - coach from array
            expect(p[0].user).toEqual('coach');
            expect(p[0].drink).toEqual('long black');
            expect(p[0].size).toEqual('medium');
            console.log(mockOrders);
            expect(data.length).toBe(2);

            expect(data).toEqual(mockOrders);
        });
        const req = http.expectOne(`${service.apiURL}/orders`);
        expect(req.request.method).toBe('GET');
        req.flush(mockOrders);
    }));
});

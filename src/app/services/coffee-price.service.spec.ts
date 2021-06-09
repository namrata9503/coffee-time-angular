import { async, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { Coffee } from 'src/app/model/coffee';
import { CoffeePriceService } from './coffee-price.service';

describe('CoffeePriceService', () => {
    let service: CoffeePriceService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: service, useClass: CoffeePriceService }],
            imports: [HttpClientTestingModule],
        });

        http = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CoffeePriceService);
    });
    afterEach(() => {
        http.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('mock the HTTP get prices service', async(() => {
        const mockPrices = [
            {
                drink_name: 'short espresso',
                prices: {
                    small: 3,
                },
            },
            {
                drink_name: 'latte',
                prices: {
                    small: 3.5,
                    medium: 4,
                    large: 4.5,
                },
            },
        ];
        service.getAllPrices().subscribe((data) => {
            const p = data.filter((c: Coffee) => c.drink_name === 'latte');
            expect(p[0].drink_name).toEqual('latte');
            expect(p[0].prices.small).toEqual(3.5);
            expect(p[0].prices.medium).toEqual(4);
            expect(p[0].prices.large).toEqual(4.5);
            console.log(mockPrices);
            expect(data.length).toBe(2);

            expect(data).toEqual(mockPrices);
        });
        const req = http.expectOne(`${service.apiURL}/prices`);
        expect(req.request.method).toBe('GET');
        req.flush(mockPrices);
    }));
});

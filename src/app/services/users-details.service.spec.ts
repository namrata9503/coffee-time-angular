import { async, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { UserDetailsService } from './users-details.service';

describe('UserDetailsService', () => {
    let service: UserDetailsService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: service, useClass: UserDetailsService }],
            imports: [HttpClientTestingModule],
        });

        http = TestBed.inject(HttpTestingController);
        service = TestBed.inject(UserDetailsService);
    });
    afterEach(() => {
        http.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('mock the HTTP get user API', async(() => {
        const mockUser = [
            'coach',
            'ellis',
            'nick'];
        service.getUser().subscribe((data) => {
            expect(data.length).toBe(3);
            expect(data).toEqual(mockUser);
        });
        const req = http.expectOne(`${service.apiURL}/users`);
        console.log('url', req.request.url);
        expect(req.request.method).toBe('GET');
        req.flush(mockUser);
    }));
    it('mock the HTTP get user details API', async(() => {
        const mockUserDetail = {
            user: 'coach',
            totalPayedAmount: 69,
            costOfAllOrders: 73,
            owed: 4,
            creditSafeScore: 10,
            orders: [
                {
                    user: 'coach',
                    drink: 'long black',
                    size: 'medium',
                },
                {
                    user: 'coach',
                    drink: 'flat white',
                    size: 'large',
                },
            ],
        };
        console.log('url det', mockUserDetail.user);

        service.getUserDetails(mockUserDetail.user).subscribe((data) => {
            expect(data.user).toEqual('coach');
            expect(data.totalPayedAmount).toEqual(69);
            expect(data.costOfAllOrders).toEqual(73);
            expect(data.owed).toEqual(4);
            expect(data.creditSafeScore).toEqual(10);
            expect(data.orders[0].user).toEqual('coach');
            expect(data.user).toEqual(mockUserDetail.user);
        });
        const req = http.expectOne(`${service.apiURL}/userdetails?user=${mockUserDetail.user}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockUserDetail);
    }));
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailsService } from '@services/users-details.service';
import { of } from 'rxjs';
import { UsersComponent } from './users.component';

const mockUserDetails = {
    user: 'ellis',
    totalPayedAmount: 24,
    costOfAllOrders: 65.75,
    owed: 41.75,
    creditSafeScore: 2,
    orders: [
        {
            user: 'ellis',
            drink: 'long black',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'mocha',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'mocha',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'latte',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'flat white',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'supermochacrapucaramelcream',
            size: 'huge',
        },
        {
            user: 'ellis',
            drink: 'short espresso',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'short espresso',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'flat white',
            size: 'large',
        },
        {
            user: 'ellis',
            drink: 'supermochacrapucaramelcream',
            size: 'ultra',
        },
        {
            user: 'ellis',
            drink: 'short espresso',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'flat white',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'short espresso',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'supermochacrapucaramelcream',
            size: 'large',
        },
        {
            user: 'ellis',
            drink: 'short espresso',
            size: 'small',
        },
        {
            user: 'ellis',
            drink: 'supermochacrapucaramelcream',
            size: 'ultra',
        },
    ],
};
describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;
    let detailsService: UserDetailsService;
    const mockUsers = mockUserDetails;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UsersComponent],
            providers: [
                { provide: UserDetailsService },
            ],
            imports: [RouterTestingModule, HttpClientTestingModule],

        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        detailsService = TestBed.get(UserDetailsService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('check whether getUsers() is called and observable value checks', async(() => {
        spyOn(component, 'getUsers').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.getUsers).toBeTruthy();
        expect(component.getUsers).toHaveBeenCalled();
        expect(component.users$).not.toBeNull();
    }));

    it('testing subscribe method', fakeAsync(() => {
        // eslint-disable-next-line max-len
        const detialSpy = spyOn(detailsService, 'getUserDetails').withArgs(mockUsers.user).and.returnValue(of(mockUsers));
        const subSpy = spyOn(detailsService.getUserDetails(mockUsers.user), 'subscribe');
        component.ngOnInit();
        tick();
        expect(detialSpy).toBeTruthy();
        expect(subSpy).toBeTruthy();
    }));
});

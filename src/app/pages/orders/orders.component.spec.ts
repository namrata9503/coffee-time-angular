import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
    let component: OrdersComponent;
    let fixture: ComponentFixture<OrdersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrdersComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],

        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check whether getOrders() is called and observable value checks', async(() => {
        spyOn(component, 'getOrders').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.getOrders).toBeTruthy();
        expect(component.getOrders).toHaveBeenCalled();
        expect(component.orders$).not.toBeNull();
    }));
});

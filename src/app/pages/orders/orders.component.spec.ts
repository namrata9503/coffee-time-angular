import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    // it('should have h1', () => {
    //     const h1 = fixture.debugElement.nativeElement.querySelector('h1');
    //     expect(h1).toBeTruthy();
    // });
});

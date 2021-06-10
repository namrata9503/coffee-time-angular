import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UsersComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],

        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
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
});

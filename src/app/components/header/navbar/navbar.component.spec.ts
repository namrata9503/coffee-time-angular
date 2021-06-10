import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should check menu button clicked', async(() => {
        fixture.detectChanges();
        spyOn(component, 'toggleNavbar');
        const menuButton = fixture.debugElement.nativeElement.querySelector('button');
        menuButton.click();
        expect(menuButton).toBeTruthy();
        expect(component.toggleNavbar).toHaveBeenCalled();
    }));
});

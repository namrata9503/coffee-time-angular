import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { OrdersComponent } from '@pages/orders/orders.component';
import { UsersComponent } from '@pages/users/users.component';

const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'users', component: UsersComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

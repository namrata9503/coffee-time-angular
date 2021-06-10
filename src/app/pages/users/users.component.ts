import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Orders } from '@model/orders';
import { Users } from '@model/users';
import { UserDetailsService } from '@services/users-details.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    Math: any;
    orders$?: Observable<Orders[]>;
    users$?: Observable<Users[]>;
    data?: Users;
    constructor(private userDetailService: UserDetailsService) {
        this.Math = Math;
    }

    ngOnInit(): void {
        this.getUsers();
    }

    /* get  users from users.service  */
    getUsers(): void {
        this.users$ = this.userDetailService.getUser();
    }
    /* get user details by name */
    getDetails(user: Users): void {
        this.userDetailService.getUserDetails(user)
            .subscribe((data) => {
                this.data = data;
            });
    }

    compare(creditscore: any, iterator: number) {
        return creditscore > iterator;
    }

}

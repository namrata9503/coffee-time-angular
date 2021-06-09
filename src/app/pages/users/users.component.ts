import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    orders$?: Observable<Orders[]>;
    users$?: Observable<Users[]>;
    data?: Users;
    constructor(private userDetailService: UserDetailsService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.getUsers();
        this.route.params.subscribe((routeParams) => {
            console.log('param: ', routeParams);
        });
    }

    /* get  users from users.service  */
    getUsers(): void {
        this.users$ = this.userDetailService.getUser();
    }
    /* get user details by name */
    getDetails(user: Users): void {
        this.userDetailService
            .getUserDetails(user)
            .subscribe((data) => {
                this.data = data;
                console.log('name : ', user, data);
            });

    }
}

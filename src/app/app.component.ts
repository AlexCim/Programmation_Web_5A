import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models/user';
import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    //currentUser: User;
    Role = Role;
    account: Account;
    
    constructor(
        //private router: Router,
        //private authenticationService: AuthenticationService,
        private accountService: AccountService
    ) {
        this.accountService.account.subscribe(x => this.account = x);
        //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.accountService.logout();
        //this.authenticationService.logout();
        //this.router.navigate(['/login']);
    }
}
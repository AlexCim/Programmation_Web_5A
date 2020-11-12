import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] },)
export class HomeComponent {
    account = this.accountService.accountValue;
    activeTab: string;

    constructor(private router: Router, private accountService: AccountService) { }

    getActiveTab(tabName: string){
        this.activeTab = tabName;
        console.log(tabName);
      }
    
      logout() {
        this.accountService.logout();
        this.router.navigate(['/login']);
      }
}
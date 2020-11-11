import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  currentUser: User;
  activeTab: string;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

  ngOnInit(): void {
  }

  getActiveTab(tabName: string){
    this.activeTab = tabName;
    console.log(tabName);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}

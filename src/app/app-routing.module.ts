import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './home/content/content.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { LoginComponent } from './account/login.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { RegisterComponent } from './account/register.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';
import { HorsesComponent } from './horse/horsesCom/horses.component';
import { HorseDetailComponent } from './horse/horse-detail/horse-detail.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const horseModule = () => import('./horse/horse.module').then(x => x.HorseModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'horses2', component: HorsesComponent,  canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'horse/:id', component: HorseDetailComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
  { path: 'account', loadChildren: accountModule },
  { path: 'horses', loadChildren: horseModule },
  { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

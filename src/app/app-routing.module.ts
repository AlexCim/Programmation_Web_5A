import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './account/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './account/register.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  //{ path: 'register', component: RegisterComponent },
  { path: 'about', component: IntroductionComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'services', component: ContentComponent},
  { path: 'testimonials', component: TestimonialComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'account', loadChildren: accountModule },
  { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

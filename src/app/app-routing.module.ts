import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: IntroductionComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'testimonials', component: TestimonialComponent, canActivate: [AuthGuard] },
  { path: 'pricing', component: PricingComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'about', component: IntroductionComponent },
  {path: 'login', component: LoginComponent },
  //{path: 'register', component: RegisterComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: 'services', component: ContentComponent },
  {path: 'testimonials', component: TestimonialComponent },
  {path: 'pricing', component: PricingComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

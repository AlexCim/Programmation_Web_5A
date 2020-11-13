import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ContentComponent } from './home/content/content.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { SocialComponent } from './home/social/social.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_components/alert.component';
import { LoginComponent } from './account/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { RegisterComponent } from './account/register.component';
import { AdminComponent } from './admin/admin.component';
import { AccountService } from './_services';
import { appInitializer } from './_helpers';
import { HorsesComponent } from './horse/horsesCom/horses.component';
import { HorseDetailComponent } from './horse/horse-detail/horse-detail.component';
import { AddHorseComponent } from './add-horse/add-horse.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    HomeComponent,
    AlertComponent,
    AdminComponent,
    HorsesComponent,
    HorseDetailComponent,
    AddHorseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }

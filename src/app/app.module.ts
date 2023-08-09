import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroSectionComponent,
    AboutUsSectionComponent,
    ServicesSectionComponent,
    WhyUsSectionComponent,
    PortfolioComponent,
    ClientsSectionComponent,
    TeamSectionComponent,
    ContactSectionComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WhyusComponent } from './whyus/whyus.component';
import { WorksComponent } from './works/works.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { WporderComponent } from './wporder/wporder.component';
import { PlatformComponent } from './platform/platform.component';
import { OrdermanageComponent } from './ordermanage/ordermanage.component';
import { PaymentComponent } from './payment/payment.component';
import { WpprocessComponent } from './wpprocess/wpprocess.component';
import { WpComponent } from './wp/wp.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WhyusComponent,
    WorksComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    ClientsComponent,
    WporderComponent,
    PlatformComponent,
    OrdermanageComponent,
    PaymentComponent,
    WpprocessComponent,
    WpComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

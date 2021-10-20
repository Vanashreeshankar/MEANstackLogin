import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteNavbarComponent } from './layout/site-navbar/site-navbar.component';
import { SiteSidebarComponent } from './layout/site-sidebar/site-sidebar.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//services
import { UserService } from './services/user.service';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteNavbarComponent,
    SiteSidebarComponent,
  
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

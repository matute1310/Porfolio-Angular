
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DatePipe } from './date-pipe.pipe';
import { DecimalPipe } from './decimal.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PortfolioService } from './services/portfolio.service';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BannerComponent,
    routingComponents,
    AppComponent,
    DatePipe,
    DecimalPipe,
    NavbarComponent,
    SobreMiComponent,
    FooterComponent,
    EducationComponent,
    LoginComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    [MdbCarouselModule],
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

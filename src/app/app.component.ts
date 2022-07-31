import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mi-app';
  isUserLogged=false;
  
  constructor(
    private portfolioService : PortfolioService,
    private authService : AuthService
  ){
    
  }


  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
  }
}

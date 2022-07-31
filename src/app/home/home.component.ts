import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLogged=false;
  constructor(
    private portfolioService:PortfolioService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
  }

}

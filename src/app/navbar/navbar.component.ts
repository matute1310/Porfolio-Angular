import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLogged=false;
  constructor(
    private portfolioService: PortfolioService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  this.isUserLogged=this.authService.isUserLogged();
  }

}

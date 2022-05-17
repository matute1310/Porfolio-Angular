import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona=null;
  urlImg=null;
  
  constructor (private portfolioService: PortfolioService) { 
    this.persona = portfolioService.getPersona();
    this.urlImg = portfolioService.getImagenUrl()+this.persona.foto;
  }

  ngOnInit(): void {
  }

}

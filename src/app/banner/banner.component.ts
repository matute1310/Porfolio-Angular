import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/models/persona';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';
import { urlConfig } from '../urlConfig';

@Component({
  selector: 'banner',
  templateUrl: '../banner/banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isUserLogged=false;
  persona:Persona;
  idPersonaUsuario:number;
  urlImg:string;
  banner:string;

  constructor(
    private portfolioService : PortfolioService,
    private authService : AuthService
    
    
  ) {this.urlImg = urlConfig.baseUrlImagen; }

  private reloadData(): void {
    if (this.isUserLogged){
        this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
          (id:number) => {
            this.idPersonaUsuario=id;
            this.portfolioService.getPersona(this.idPersonaUsuario).subscribe(
              (data:Persona) => {
                this.persona=data;                
              });
          });
        }
    else{
      this.portfolioService.getPersona(2).subscribe(
        (data:Persona) => {
          this.persona=data;
        });
    }
    
    }  
  
  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
    this.reloadData()
  }
  

}

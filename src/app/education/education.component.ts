import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations=null;
  imgUrl=null;
  

  public toggle(education:any) {
    education.mostrarComent = !education.mostrarComent;
    
    if (education.mostrarComent)
    education.nombreBoton = "Mostrar";
    else
    education.nombreBoton = "Ocultar";
  }



  constructor (private portfolioService: PortfolioService) { 
    this.educations = portfolioService.getEducations();
    this.imgUrl = portfolioService.getImagenUrl()+ "logos/";
  }

  
  ngOnInit(): void {
  }

}

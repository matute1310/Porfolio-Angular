import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/models/trabajo';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'jobs',
  templateUrl: '../jobs/jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  trabajos=null;
  imgUrl=null;
  divisorAño: number =31540000000;
  divisorMes: number = 2629800000;

  
  

  public toggle(trabajo:any) {
    trabajo.mostrarComent = !trabajo.mostrarComent;
    
    if (trabajo.mostrarComent)
      trabajo.nombreBoton = "Mostrar";
    else
      trabajo.nombreBoton = "Ocultar";
  }

  public getExpTrabajo(fechainicial:Date,fechaFinal:Date){
    let Años:number = 0;
    let Mes:number = 0;
    let salidaAño:string = "";
    let salidaMes:string = "";
    Años=Math.floor((fechaFinal.getTime()-fechainicial.getTime())/this.divisorAño);
    Mes=Math.floor((fechaFinal.getTime()-fechainicial.getTime())/this.divisorMes);
    
    if (Años == 1)
      salidaAño = Años + " año"
    else if (Años > 1)
      salidaAño = Años + " años"
    else if (Años == 0)
      salidaAño = ""  
    
    if (Mes == 1)
      salidaMes = Mes + " mes"
    else if (Mes > 1)
      if (Mes > 12)
          if ((Mes - (12*Años))==0)
            salidaMes = ""
          else if ((Mes - (12*Años))>1)
            salidaMes = " y "+(Mes - (12*Años)) + " meses"
          else
          salidaMes = " y "+(Mes - (12*Años)) + " mes"
      else if (Mes < 12)
        salidaMes =  Mes + " meses"
    else if (Mes == 0)
        salidaMes = ""
    
    return "Experiencia: " + salidaAño + salidaMes+"."
  }
  
  public mathFloor(numero:number) {
    return Math.floor(numero);
  }

  constructor (private portfolioService: PortfolioService) { 
    this.trabajos = portfolioService.getJobs();
    this.imgUrl = portfolioService.getImagenUrl()+"logos/";
  }
  
  

  ngOnInit(): void {
  
    
  }

}

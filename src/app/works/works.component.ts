import { Component, OnInit } from '@angular/core';
import { Work } from 'src/models/work';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogoGaleriaComponent } from '../dialogo-galeria/dialogo-galeria.component';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'works',
  templateUrl: '../works/works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works=null;
  urlImg=null;
  mostrarComent:boolean=false;
  i=0;

  public setIndice(i): void{
    this.i=i
  }


  constructor(
    private portfolioService: PortfolioService,
    private matDialog: MatDialog
  ) { 
    this.works = portfolioService.getWorks();
    this.urlImg = portfolioService.getImagenUrl()+"works/";
  }
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={indice:this.i}
    dialogConfig.hasBackdrop= true;
    this.matDialog.open(DialogoGaleriaComponent,dialogConfig);
  }

    
  
  ngOnInit(): void {
    this.mostrarComent=false;
  }
}


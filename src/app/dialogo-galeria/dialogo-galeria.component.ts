import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,MatDialogRef,MatDialogConfig
} from "@angular/material/dialog";

import { PortfolioService } from '../services/portfolio.service';




@Component({
  selector: 'app-dialogo-galeria',
  templateUrl: './dialogo-galeria.component.html',
  styleUrls: ['./dialogo-galeria.component.css'],
  
})
export class DialogoGaleriaComponent implements OnInit {

  works=null;
  imgUrl=null;
  constructor(public dialogRef: MatDialogRef<DialogoGaleriaComponent>, @Inject(MAT_DIALOG_DATA) public data: any ,private portfolioService: PortfolioService ) {    
    this.works = portfolioService.getWorks();
    this.imgUrl = portfolioService.getImagenUrl()+"works/";
    this.dialogRef.backdropClick().subscribe(() => {
      // cierra el dialog
    this.dialogRef.close();
    })
    
      
    
    
  }
  
  close() {
    
    this.dialogRef.close();
    this.dialogRef.backdropClick().subscribe(() => {
      // Cierra el dialog
    this.dialogRef.close();
    })
    
  }
  
  ngOnInit(): void {
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { Work } from 'src/models/work';
import { PortfolioService } from '../services/portfolio.service';
import { AuthService } from '../services/auth.service';
import { urlConfig } from '../urlConfig';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'works',
  templateUrl: '../works/works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works=null;
  urlImg=urlConfig.baseUrlImagen+"works/";
  mostrarComent:boolean=false;
  i=0;
  indiceSeteado=false;
  isUserLogged=false;
  perso_id=this.portfolioService.perso_id;
  worksForm:FormGroup;

  public getWorkGalery(work){
    var workGalery=new Array;
    workGalery.push(work.imagen1);
    if (work.imagen2!==''){workGalery.push(work.imagen2);}
    if (work.imagen3!==''){workGalery.push(work.imagen3);}
    if (work.imagen4!==''){workGalery.push(work.imagen4);}
    if (work.imagen5!==''){workGalery.push(work.imagen5);}
    return workGalery;
  }

  public setIndice(i): void{
    this.i=i
    this.changeIdSeteado()
  }

  public changeIdSeteado(){
    this.indiceSeteado=true;
  }

  constructor(
    
    private portfolioService: PortfolioService,
    private authService : AuthService,
    private FormBuilder:FormBuilder
  ) { 
    
    this.worksForm = this.FormBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      fecha:['',[Validators.required]],
      coment:['',[Validators.required]],
      imagen1:['',[Validators.required]],
      imagen2:[''],
      imagen3:[''],
      imagen4:[''],
      imagen5:[''],
      mostrarGaleria:[''],
      idPersona:['']
    })
  }
  
  
  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
    this.reloadData();
  }

  private reloadData() {
    if (this.isUserLogged){
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number) =>{
          this.perso_id=id;
          this.portfolioService.getWorks(this.perso_id).subscribe(
            (data) => {
              this.works=data;
            });
        });
    }
    else{
      this.portfolioService.getWorks(2).subscribe(
            (data) => {
              this.works=data;
            });
        }
  }

  onSubmit() {
    let work: Work = this.worksForm.value;
    if (this.worksForm.get('id')?.value == '') {
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number)=> {
          this.perso_id=id;
          work.idPersona=this.perso_id;
          this.portfolioService.saveWork(work).subscribe(
            (newWork: Work) => {
              this.works.push(newWork);
              this.reloadData();
            })
          })
        }
    else {
      this.portfolioService.editWork(work).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  private clearForm() {
    
    this.worksForm.setValue({
      id:'',
      titulo:'',
      fecha:'',
      coment:'',
      imagen1:'',
      imagen2:'',
      imagen3:'',
      imagen4:'',
      imagen5:'',
      mostrarGaleria:'',
      idPersona:''
    })
  }
  onNewWork() {
    this.clearForm();
  }
  onDeleteWork(index: number) {
    let work: Work = this.works[index];
    if (confirm("¿Está seguro que desea borrar la información seleccionada?")) {
      this.portfolioService.deleteWork(work.id).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  private loadForm(work: Work) {
    this.worksForm.setValue({
      id: work.id,
      titulo: work.titulo,
      fecha: work.fecha,
      coment: work.coment,
      mostrarGaleria: work.mostrarGaleria,
      imagen1:work.imagen1,
      imagen2:work.imagen2,
      imagen3:work.imagen3,
      imagen4:work.imagen4,
      imagen5:work.imagen5,
      idPersona: work.idPersona

    })
  }

  onEditWork(index: number) {
    let work: Work = this.works[index];
    this.loadForm(work);
  }

  getIndice(){
    return this.i;
  }

}


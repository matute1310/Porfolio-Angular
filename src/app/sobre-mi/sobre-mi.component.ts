import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { Persona } from 'src/models/persona';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';
import { urlConfig } from '../urlConfig';

@Component({
  selector: 'sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona:Persona;
  urlImg="";
  isUserLogged=false;
  mail=sessionStorage.getItem("user");
  persoForm:FormGroup;
  viewportWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.viewportWidth = event.target.innerWidth;
  }

  viewportMenorA(viewportWidth: number): boolean {
      return this.viewportWidth < viewportWidth;
}
  constructor (
    private portfolioService: PortfolioService,
    private authService : AuthService,
    private formBuilder:FormBuilder
    ) { 
    this.urlImg = urlConfig.baseUrlImagen;
    this.persoForm=this.formBuilder.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      fechaNacimiento:[''],
      titulo:[''],
      descripcion:[''],
      foto:[''],
      banner:['']
    } )
    } 

  
  private reloadData(): void {
    let idPersonaUsuario:number;
    if (this.isUserLogged){
        this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
          (data) => {
            idPersonaUsuario=data;
            this.portfolioService.getPersona(idPersonaUsuario).subscribe(
              (data) => {
                this.persona=data;
              });
          });
        }
    else{
      this.portfolioService.getPersona(2).subscribe(
        (data) => {
          this.persona=data;
        });
    }
    }  
  
  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
    this.reloadData()
  }

  onSubmit() {
    let persona: Persona = this.persoForm.value;
      this.portfolioService.editPersona(persona).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  
private loadForm(persona: Persona) {
  this.persoForm.setValue({
    id: persona.id,
    nombre: persona.nombre,
    apellido: persona.apellido,
    titulo: persona.titulo,
    fechaNacimiento: persona.fechaNacimiento,
    descripcion: persona.descripcion,
    foto: persona.foto,
    banner:persona.banner
  })
}  
onEditPersona(){
  let perso: Persona = this.persona;
  this.loadForm(perso);
}

  
}



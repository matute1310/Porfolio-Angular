import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/models/educacion';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';
import { urlConfig } from '../urlConfig';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations:Educacion[] = [];
  imgUrl = urlConfig.baseUrlImagen + "logos/";
  isUserLogged=false;
  eduForm: FormGroup;
  perso_id=this.portfolioService.perso_id
  

  

  public toggle(education:any) {
    education.mostrarComent = !education.mostrarComent;
    
    if (!education.mostrarComent)
    education.nombreBoton = "Mostrar";
    else
    education.nombreBoton = "Ocultar";
  }



  constructor (
    private portfolioService: PortfolioService,
    private authService : AuthService,
    private formBuilder:FormBuilder  
    ) { 
    
    this.eduForm = this.formBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      institucion:['',[Validators.required]],
      fechaFinal:['',[Validators.required]],
      logo:['',[Validators.required]],
      coment:['',[Validators.required]],
      mostrarComent:['0'],
      nombreBoton:[''],
      idPersona:['']
    }); 
  }
  
  

  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
    this. reloadData();
  }

  private reloadData() {
    if (this.isUserLogged){
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number) =>{
          this.perso_id=id;
          this.portfolioService.getEducationsById(this.perso_id).subscribe(
            (data) => {
              this.educations=data;
            });
        });
    }
    else{
      this.portfolioService.getEducationsById(2).subscribe(
            (data) => {
              this.educations=data;
            });
        }
  }

  onSubmit() {
    let educacion: Educacion = this.eduForm.value;
    if (this.eduForm.get('id')?.value == '') {
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number)=> {
          this.perso_id=id;
          educacion.nombreBoton="Mostrar"
          educacion.idPersona=this.perso_id;
          this.portfolioService.saveEducation(educacion).subscribe(
            (newEducation: Educacion) => {
              this.educations.push(newEducation);
              this.reloadData();
            })
          })
        }
    else {
      this.portfolioService.editEducacion(educacion).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  private clearForm() {
    this.eduForm.setValue({
      id: '',
      titulo: '',
      institucion: '',
      logo: '',
      fechaFinal: '',
      coment:'',
      idPersona:'',
      mostrarComent:'',
      nombreBoton:''
    })
  }
  private loadForm(educacion: Educacion) {
    this.eduForm.setValue({
      id: educacion.id,
      institucion: educacion.institucion,
      titulo: educacion.titulo,
      logo: educacion.logo,
      fechaFinal: educacion.fechaFinal,
      coment:educacion.coment,
      idPersona:educacion.idPersona,
      mostrarComent:educacion.mostrarComent,
      nombreBoton:educacion.nombreBoton

    })
  }
onNewEducation() {
  this.clearForm();
}
onDeleteEducation(index: number) {
  let educacion: Educacion = this.educations[index];
  if (confirm("¿Está seguro que desea borrar la información seleccionada?")) {
    this.portfolioService.deleteEducacion(educacion.id).subscribe(
      () => {
        this.reloadData();
      }
    )
  }
}
onEditEducation(index: number) {
  let educacion: Educacion = this.educations[index];
  this.loadForm(educacion);
}

}

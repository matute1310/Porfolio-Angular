import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/models/job';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';
import { urlConfig } from '../urlConfig';

@Component({
  selector: 'jobs',
  templateUrl: '../jobs/jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  isUserLogged=false;
  jobs=null;
  imgUrl = urlConfig.baseUrlImagen +"logos/";
  divisorAño: number =31540000000;
  divisorMes: number = 2629800000;
  jobsForm:FormGroup;
  perso_id=this.portfolioService.perso_id;
  fechaHoy:Date = new Date(Date.now());
  viewportWidth:number;

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
    ){ 
    this.jobsForm = this.formBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      empresa:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFinal:[''],
      logo:['',[Validators.required]],
      actual:[new FormControl().setValue(Boolean)],
      coment:['',[Validators.required]],
      mostrarComent:['0'],
      nombreBoton:[''],
      idPersona:['']
    })
  }
  /*
  public toggleActual(){
    this.actual= !this.actual;
  }*/

  
  public getActualDate(){
    return this.fechaHoy;
  }
  public toggle(job:Job) {
    job.mostrarComent = !job.mostrarComent;
    
    if (!job.mostrarComent)
      job.nombreBoton = "Mostrar";
    else
      job.nombreBoton = "Ocultar";
  }

  public toDate(any){
    
    return new Date(any); 
  }

  public getExpTrabajo(fechainicial : string,fechaFinal:string){
    let Años:number = 0;
    let Mes:number = 0;
    let salidaAño:string = "";
    let salidaMes:string = "";
    var fechaF=new Date(fechaFinal)
    var fechaI=new Date(fechainicial)
    Años = Math.floor((fechaF.getTime()-fechaI.getTime())/this.divisorAño);
    Mes = Math.floor((fechaF.getTime()-fechaI.getTime())/this.divisorMes);
    
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

  
  onSubmit() {
    let job: Job = this.jobsForm.value;
    if (this.jobsForm.get('id')?.value == '') {
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number)=> {
          this.perso_id=id;
          job.nombreBoton="Mostrar"
          job.idPersona=this.perso_id;
          this.portfolioService.saveJob(job).subscribe(
            (newJob: Job) => {
              this.jobs.push(newJob);
              this.reloadData();
            })
          })
        }
    else {
      this.portfolioService.editJob(job).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }
  
  private clearForm() {
    
    this.jobsForm.setValue({
      id: '',
      idPersona:'',
      titulo:'',
      empresa:'',
      fechaInicio:'',
      fechaFinal:'',
      logo:'',
      actual:'',
      coment:'',
      mostrarComent:'',
      nombreBoton:''
    })
  }
  onNewJob() {
    this.clearForm();
  }
  onDeleteJob(index: number) {
    let job: Job = this.jobs[index];
    if (confirm("¿Está seguro que desea borrar la información seleccionada?")) {
      this.portfolioService.deleteJob(job.id).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }
  private loadForm(job: Job) {
    this.jobsForm.setValue({
      id: job.id,
      idPersona:job.idPersona,
      titulo:job.titulo,
      empresa:job.empresa,
      fechaInicio:new Date(job.fechaInicio),
      fechaFinal:new Date(job.fechaFinal),
      logo:job.logo,
      actual:job.actual,
      coment:job.coment,
      mostrarComent:job.mostrarComent,
      nombreBoton:job.nombreBoton

    })
  }
  onEditJob(index: number) {
    let job: Job = this.jobs[index];
    this.loadForm(job);
  }

  private reloadData() {
    if (this.isUserLogged){
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number) =>{
          this.perso_id=id;
          this.portfolioService.getJobs(this.perso_id).subscribe(
            (data) => {
              this.jobs=data;
            });
        });
    }
    else{
      this.portfolioService.getJobs(2).subscribe(
            (data) => {
              this.jobs=data;
            });
        }
  }
  get Actual(){
    return this.jobsForm.get('actual')
  }
  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
    this.reloadData();
  }

}

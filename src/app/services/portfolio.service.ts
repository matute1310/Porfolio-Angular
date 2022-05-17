import { Injectable } from '@angular/core';
import { Educacion } from 'src/models/educacion';
import { Persona } from 'src/models/persona';
import { Skill } from 'src/models/skill';
import { Trabajo } from 'src/models/trabajo';
import { urlConfig } from 'src/models/urlConfig';
import { Work } from 'src/models/work';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  imageUrl=urlConfig.baseUrlImagen;

  public getPersona(){
    return this.persona;
  }

  public getWorks(){
    return this.works;
  }
  public getEducations(){
    return this.educations;
  }

  public getJobs(){
    return this.jobs;
  }

  public getSkill(){
    return this.skills;
  }
  public getImagenUrl(){
    return this.imageUrl;
  }



  
  constructor() { }
  
  persona: Persona={
    id:0,
    nombre:"Matias",
    apellido:"Calvento",
    edad:34,
    fechaNaciomiento:new Date(13/10/1987),
    titulo:"FULL STACK DEVELOPER JR",
    descripcion:"Soy un diseñador gráfico que encontró en la programación una nueva forma de expresar toda mi creatividad y hacer de esta mi nueva profesión. Me gustan los videojuegos las series, las pelis y el anime. Espero que este sitio sirva para que me conozcan un poco y podamos en algún momento trabajar juntos!",
    foto:"fotoCARNET.jpg"
  }
  educations:Educacion[]=[
    {
      id:0,
      titulo:"Administrador del sistema",
      empresa: 'Atilio Salas',
      fechaInicio: new Date("01/01/2022"),
      fechaFinal: new Date(Date.now()),
      completado:true,
      logo:"logoSalas.png",
      actual:true,
      coment:"Asistencia a sectores en relacion a sistemas, consultas en base de datos SQL, mantenimiento general de equipos, etc",
      mostrarComent:true,
      nombreBoton:"Mostrar"
    
      }
      ,
      {
        id:1,
        titulo:"Informático administrativo",
        empresa: 'Atilio Salas',
        fechaInicio: new Date("11/01/2020"),
        fechaFinal: new Date("01/01/2022"),
        completado:true,
        logo:"logoSalas.png",
        actual:false,
        coment: "Tareas informaticas y administrativas en relacion al sector de impuestos.",
        mostrarComent:true,
        nombreBoton:"Mostrar"
        
      }
      ,
      {
        id:2,
        titulo:'Data entry en SAP',
        empresa: 'UTE Bahía Blanca para Profertil Sa',
        fechaInicio: new Date("06/01/2018"),
        fechaFinal: new Date("08/01/2018"),
        completado:true,
        logo:"ute_logobb.png",
        actual:false,
        coment:"Carga y control de datos para el sector de recursos humanos durante la parada de planta de Profertil SA",
        mostrarComent:true,
        nombreBoton:"Mostrar"
      }
      ,
      {
        id:3,
        titulo:'Diseñador gráfico freelance',
        empresa: 'Matias Calvento DG',
        fechaInicio: new Date("01/01/2012"),
        fechaFinal:  new Date("01/01/2020"),
        completado:true,
        logo:"logodiseño.png",
        actual:false,
        coment:"Diseño de piezas graficas, digitales y audiovisuales de manera freelance para diversos clientes",
        mostrarComent:true,
        nombreBoton:"Mostrar"
      }      
  ]
  works:Work[]=[
    {
      id:0,
      titulo:'Vientos del Sur',
      imagen:["vientosur.jpg"],
      fecha:new Date(),
      destacar:false,
      coment:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impre",
      mostrarGaleria:false
    }
    ,
    {
      id:1,
      titulo:'Liga Versus',
      imagen:["ligaversus.png","ligaversus1.png","ligaversus2.png"],
      fecha:new Date(),
      destacar:false,
      coment:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impre",
      mostrarGaleria:false
    }
    ,
    {
      id:2,
      titulo:'Yuum',
      imagen:["yuum.jpg"],
      fecha:new Date(),
      destacar:false,
      coment:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impre",
      mostrarGaleria:false
    }
    ,
    {
      id:3,
      titulo:'Bueno es Dios',
      imagen:["buenoesdios.jpg"],
      fecha:new Date(),
      destacar:false,
      coment:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impre",
      mostrarGaleria:false
    }
    ,
    {
      id:4,
      titulo:'Campaña Feliu',
      imagen:["feliu.jpg"],
      fecha:new Date(),
      destacar:false,
      coment:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impre",
      mostrarGaleria:false
    }
  ]
  jobs:Trabajo[]=[
    {
      id:0,
      titulo:"Administrador del sistema",
      empresa: 'Atilio Salas',
      fechaInicio: new Date("01/01/2022"),
      fechaFinal: new Date(Date.now()),
      completado:true,
      logo:"logoSalas.png",
      actual:true,
      coment:"Asistencia a sectores en relacion a sistemas, consultas en base de datos SQL, mantenimiento general de equipos, etc",
      mostrarComent:true,
      nombreBoton:"Mostrar"
    
      }
      ,
      {
        id:1,
        titulo:"Informático administrativo",
        empresa: 'Atilio Salas',
        fechaInicio: new Date("11/01/2020"),
        fechaFinal: new Date("01/01/2022"),
        completado:true,
        logo:"logoSalas.png",
        actual:false,
        coment: "Tareas informaticas y administrativas en relacion al sector de impuestos.",
        mostrarComent:true,
        nombreBoton:"Mostrar"
        
      }
      ,
      {
        id:2,
        titulo:'Data entry en SAP',
        empresa: 'UTE Bahía Blanca para Profertil Sa',
        fechaInicio: new Date("06/01/2018"),
        fechaFinal: new Date("08/01/2018"),
        completado:true,
        logo:"ute_logobb.png",
        actual:false,
        coment:"Carga y control de datos para el sector de recursos humanos durante la parada de planta de Profertil SA",
        mostrarComent:true,
        nombreBoton:"Mostrar"
      }
      ,
      {
        id:3,
        titulo:'Diseñador gráfico freelance',
        empresa: 'Matias Calvento DG',
        fechaInicio: new Date("01/01/2012"),
        fechaFinal:  new Date("01/01/2020"),
        completado:true,
        logo:"logodiseño.png",
        actual:false,
        coment:"Diseño de piezas graficas, digitales y audiovisuales de manera freelance para diversos clientes",
        mostrarComent:true,
        nombreBoton:"Mostrar"
      }      
  ]
  skills:Skill[]=[
    {id: 0, titulo:'Java',logo:'', nivel:50},
    {id: 1, titulo:'Javascript',logo:'', nivel:30},
    {id: 2, titulo:'Python',logo:'', nivel:50},
    {id: 3, titulo:'Angular',logo:'', nivel:30},
    {id: 4, titulo:'Html',logo:'', nivel:50},
    {id: 5, titulo:'CSS',logo:'', nivel:50},
    {id: 6, titulo:'Boostrap',logo:'', nivel:30},
    {id: 7, titulo:'Photoshop',logo:'', nivel:70}
  ]





}

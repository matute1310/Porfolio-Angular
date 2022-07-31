export class Job {
    id: number = 0;
    titulo: string = '';
    empresa: string = '';
    fechaInicio: Date = new Date();
    fechaFinal: Date =  new Date();
    completado: boolean = false;
    logo: string ='';
    actual:boolean = false;
    coment: string ="";
    mostrarComent:boolean=false;
    nombreBoton: string ="";
    idPersona:number=0;   
    
}
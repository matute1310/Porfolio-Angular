import { Injectable } from '@angular/core';
import { Educacion } from 'src/models/educacion';
import { Persona } from 'src/models/persona';
import { Skill } from 'src/models/skill';
import { Job } from 'src/models/job';
import { urlConfig } from 'src/app/urlConfig';
import { Work } from 'src/models/work';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Red } from 'src/models/red';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  imageUrl=urlConfig.baseUrlImagen;
  perso_id:number=0;
  constructor(private http: HttpClient) {}

  //PERSONA
  public getPersona(id: number):Observable<Persona>{
    return this.http.get<any>(urlConfig.baseUrl + "buscar/persona/" + id);
  }

  public getPersonaDeUsuario(email: String):Observable<number>{
    return this.http.get<number>(urlConfig.baseUrl+ "buscar/personadeusuario/"+email)
  }

  public editPersona(persona:Persona): Observable<any> {
    return this.http.put<any>(urlConfig.baseUrl +"edit/persona",persona);
  }

//EDUCATION  
  public getEducations(): Observable<Educacion[]>{
    return this.http.get<any>(urlConfig.baseUrl + "ver/educations");
  }
  public getEducationsById(id:number):Observable<Educacion[]>{
    return this.http.get<any>(urlConfig.baseUrl + "buscar/educations/"+id);
  }
  public saveEducation(educacion:Educacion): Observable<Educacion>{
    return this.http.post<any>(urlConfig.baseUrl + "new/education", educacion);
  }
  public deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(urlConfig.baseUrl + "delete/education/" + id);
  }
  public editEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(urlConfig.baseUrl + "edit/education", educacion);
  }
//JOBS
  public getJobs(id:number):Observable<Job[]>{
    return this.http.get<any>(urlConfig.baseUrl+"buscar/jobs/"+id)
  }
  public saveJob(job:Job):Observable<Job>{
    return this.http.post<any>(urlConfig.baseUrl + "new/job",job);
  }
  public editJob(job:Job):Observable<any>{
    return this.http.put<any>(urlConfig.baseUrl + "edit/job",job);
  }
  public deleteJob(id:number):Observable<any>{
    return this.http.delete<any>(urlConfig.baseUrl+"delete/job/"+id);
  }


//SKILL
public getSkills(id:number):Observable<Skill[]>{
  return this.http.get<any>(urlConfig.baseUrl+"buscar/skills/"+id)
}
public saveSkill(skill:Skill):Observable<Skill>{
  return this.http.post<any>(urlConfig.baseUrl + "new/skill",skill);
}
public editSkill(skill:Skill):Observable<Skill>{
  return this.http.put<any>(urlConfig.baseUrl +"edit/skill",skill);
}
public deleteSkill(id:number):Observable<any>{
  return this.http.delete<any>(urlConfig.baseUrl+"delete/skill/"+id);
}
//WORK
public getWorks(id:number):Observable<Work[]>{
  return this.http.get<any>(urlConfig.baseUrl+"buscar/works/"+id)
}
public saveWork(work:Work):Observable<Work>{
  return this.http.post<any>(urlConfig.baseUrl + "new/work",work);
}
public editWork(work:Work):Observable<Work>{
  return this.http.put<any>(urlConfig.baseUrl +"edit/work",work);
}
public deleteWork(id:number):Observable<any>{
  return this.http.delete<any>(urlConfig.baseUrl+"delete/work/"+id);
}

  public getImagenUrl(){
    return this.imageUrl;
  }
//Redes
public getRedes(id:number):Observable<Red[]>{
  return this.http.get<any>(urlConfig.baseUrl+"buscar/red/"+id)
}
public saveRed(red:Red):Observable<Red>{
  return this.http.post<any>(urlConfig.baseUrl + "new/red",red);
}
public editRed(red:Red):Observable<Red>{
  return this.http.put<any>(urlConfig.baseUrl +"edit/red",red);
}



}

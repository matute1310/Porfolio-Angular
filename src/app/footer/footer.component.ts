import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Red } from 'src/models/red';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  redes:any;
  isUserLogged=false;
  redForm:FormGroup;
  perso_id=this.portfolioService.perso_id;




  constructor(
    private portfolioService:PortfolioService,
    private authService : AuthService,
    private FormBuilder:FormBuilder
  ) { 
    this.redForm = this.FormBuilder.group({
      id:[''],
      behance:[''],
      email:[''],
      git:[''],
      idPersona:[''],
      instagram:[''],
      linkedin:[''],
      twitter:['']	
    });


  }
  private reloadData() {
    if (this.isUserLogged){
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number) =>{
          this.perso_id=id;
          this.portfolioService.getRedes(this.perso_id).subscribe(
            (data) => {
              this.redes=data;
            });
        });
    }
    else{
      this.portfolioService.getRedes(2).subscribe(
            (data) => {
              this.redes=data;
            });
        }
  }

  onSubmit() {
    let red: Red = this.redForm.value;
    if (this.redForm.get('id')?.value == '') {
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number)=> {
          this.perso_id=id;
          red.idPersona=this.perso_id;
          this.portfolioService.saveRed(red).subscribe(
            (newRed: Red) => {
              this.redes.push(newRed);
              this.reloadData();
            })
          })
        }
    else {
      this.portfolioService.editRed(red).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }
  private loadForm(red: Red) {
    this.redForm.setValue({
      id:red.id,
      behance:red.behance,
      email:red.email,
      git:red.git,
      idPersona:red.idPersona,
      instagram:red.instagram,
      linkedin:red.linkedin,
      twitter:red.twitter	

    })
  }

  onEditRedes() {
    let red: Red = this.redes;
    this.loadForm(red);
  }

  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
    this.reloadData();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/models/skill';
import { AuthService } from '../services/auth.service';
import { PortfolioService } from '../services/portfolio.service';


@Component({
  selector: 'skills',
  templateUrl: '../skills/skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=null;
  isUserLogged=false;
  skillsForm:FormGroup;
  perso_id=this.portfolioService.perso_id;
  
  
  constructor(
    private portfolioService: PortfolioService,
    private authService : AuthService,
    private FormBuilder:FormBuilder
    ){ 
    this.skillsForm = this.FormBuilder.group({
      id:[''],
      idPersona:[''],
      titulo:['',[Validators.required]],
      nivel:['',[Validators.required]]
    })
    
    ;
  }


  private reloadData() {
    if (this.isUserLogged){
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number) =>{
          this.perso_id=id;
          this.portfolioService.getSkills(this.perso_id).subscribe(
            (data) => {
              this.skills=data;
            });
        });
    }
    else{
      this.portfolioService.getSkills(2).subscribe(
            (data) => {
              this.skills=data;
            });
        }
  }
  onSubmit() {
    let skill: Skill = this.skillsForm.value;
    if (this.skillsForm.get('id')?.value == '') {
      this.portfolioService.getPersonaDeUsuario(sessionStorage.getItem("user")).subscribe(
        (id:number)=> {
          this.perso_id=id;
          skill.idPersona=this.perso_id;
          this.portfolioService.saveSkill(skill).subscribe(
            (newSkill: Skill) => {
              this.skills.push(newSkill);
              this.reloadData();
            })
          })
        }
    else {
      this.portfolioService.editSkill(skill).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }
  private clearForm() {
    
    this.skillsForm.setValue({
      id:'',
      idPersona:'',
      titulo:'',
      nivel:''
    })
  }
  onNewSkill() {
    this.clearForm();
  }
  onDeleteSkill(index: number) {
    let skill: Skill = this.skills[index];
    if (confirm("¿Está seguro que desea borrar la información seleccionada?")) {
      this.portfolioService.deleteSkill(skill.id).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  private loadForm(skill: Skill) {
    this.skillsForm.setValue({
      id:skill.id,
      idPersona:skill.idPersona,
      titulo:skill.titulo,
      nivel:skill.nivel

    })
  }

  onEditSkill(index: number) {
    let skill: Skill = this.skills[index];
    this.loadForm(skill);
  }

  ngOnInit(): void {
    this.isUserLogged=this.authService.isUserLogged();
    this.reloadData();
  }

}

import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/models/skill';
import { PortfolioService } from '../services/portfolio.service';


@Component({
  selector: 'skills',
  templateUrl: '../skills/skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=null;
  
  
  constructor(
    private portfolioService: PortfolioService,){ 
    this.skills = portfolioService.getSkill();
  }

  ngOnInit(): void {
  }

}

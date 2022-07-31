import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { JobsComponent } from 'src/app/jobs/jobs.component';
import { SkillsComponent } from 'src/app/skills/skills.component';
import { WorksComponent } from 'src/app/works/works.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path:'skills',component:SkillsComponent},
  {path:'jobs',component:JobsComponent},
  {path:'works',component:WorksComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'education', component:EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SkillsComponent,JobsComponent,WorksComponent,HomeComponent,EducationComponent]

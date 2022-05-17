import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {

  MatProgressSpinnerModule 

} from '@angular/material/progress-spinner';

@NgModule({

imports: [

  MatProgressSpinnerModule,
  MatProgressBarModule

],

exports: [

  MatProgressSpinnerModule,
  MatProgressBarModule
]

})

export class MaterialModule {}
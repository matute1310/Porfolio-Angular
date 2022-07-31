import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {

  MatProgressSpinnerModule 

} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

@NgModule({

imports: [

  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatIconModule

],

exports: [

  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatIconModule
]

})

export class MaterialModule {}
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
const MaterialComponents = [MatSliderModule,
  MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule,MatDividerModule];

@NgModule({
  imports: [MaterialComponents,
    ],
  exports: [
   MaterialComponents
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    SpinnerComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports : [
    BrowserModule ,
    SpinnerComponent,
    RouterModule,
    FormsModule,
    SelectComponent
  ]
})
export class SharedModule { }

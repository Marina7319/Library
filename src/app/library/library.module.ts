import { LibraryService } from './library.service';
import { ResultComponent } from './result/result.component';
import { LibraryComponent } from './library.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LibraryComponent,
    ResultComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    LibraryService
  ]
})
export class LibraryModule { }

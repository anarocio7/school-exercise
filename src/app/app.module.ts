import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyOwnCustomMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { ParentsComponent } from './components/parents/parents.component';
import { MenuComponent } from './components/menu/menu.component';
import { StudentsListComponent } from './components./../components/students/students-list/students-list.component';

import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from './components/students/students.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    StudentsComponent,
    ParentsComponent,
    MenuComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyOwnCustomMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder, StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

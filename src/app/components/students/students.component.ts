import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { StudentsService } from './students.service';
import { Student } from './student.model';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('genderInput') genderInputRef: ElementRef;
  @ViewChild('gradeInput') gradeInputRef: ElementRef;
  @ViewChild('dateInput') dateInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;
  @ViewChild('emailInput') emailInputRef: ElementRef;

  title: String = 'Students Form';
  options: FormGroup;
  studentsForm: NgForm;

  studentData = {
    firstName: '',
    lastName: '',
    gender: '',
    grade: '',
    date: '',
    phone: '',
    email: ''
  }

  submitted = false;

  constructor(private stService: StudentsService) {
  }

  ngOnInit() {
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }



  onAddItem(form: NgForm) {
    const stuName = this.nameInputRef.nativeElement.value;
    const stuLastName = this.lastNameInputRef.nativeElement.value;
    const stuGender = this.genderInputRef.nativeElement.value;
    const stuGrade = this.gradeInputRef.nativeElement.value;
    const stuDate = this.dateInputRef.nativeElement.value;
    const stuPhone = this.phoneInputRef.nativeElement.value;
    const stuEmail = this.emailInputRef.nativeElement.value;
    const newStudent = new Student(stuName, stuLastName, stuGender, stuGrade, stuDate, stuPhone, stuEmail);
    this.stService.addStudent(newStudent);
  }

}

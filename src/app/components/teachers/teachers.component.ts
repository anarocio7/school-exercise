import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.sass']
})
export class TeachersComponent implements OnInit {

  currentDate = new Date();
  signUpTeachers: FormGroup;
  title: String = 'Teachers Form';

  constructor() {
   }

   // Initialazing my form

  ngOnInit() {
    this.signUpTeachers = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      'lastName': new FormControl(null, Validators.maxLength(15)),
      'grade': new FormControl(1, Validators.maxLength(1)),
      'dateOfBirth': new FormControl(null, this.ageRangeValidator),
      'phone': new FormControl(null, Validators.maxLength(8)),
      'email': new FormControl(null, Validators.email)
    });

    }

  onSubmit() {
    console.log(this.signUpTeachers);
  }

   ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
     const birthday = new Date (control.value);
     const today = new Date;
       if (birthday.getFullYear () - today.getFullYear () <= 18) {
          return { 'ageRange': true };
    }
          return null;
}



}

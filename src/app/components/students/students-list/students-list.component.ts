import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: '../students-list/students-list.component.html'
})

export class StudentsListComponent implements OnInit {
  students: Student[] = [
  ];

  constructor (private studentService: StudentsService) {

  }

  ngOnInit() {
    this.students = this.studentService.getStudents();
    this.studentService.studentAdded
      .subscribe((students: Student[]) => this.students = students);

  }
}

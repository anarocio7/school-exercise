import { Student } from './student.model';
import { EventEmitter } from '@angular/core';

export class StudentsService {
// inform that new data is available
    studentAdded = new EventEmitter<Student[]>();
    private students: Student[] = [

    new Student('Ana', 'Betancourt', 'F', 2, '10/01/1988', 12345678, 'anarocio26@gmail.com'),
    new Student('Clyo', 'Tolentino', 'F', 3, '22/12/1996', 87654321, 'astridcst@gmail.com')

  ];

  // you get a copy of the array since you cannot get the array, because it's a reference type

  getStudents() {
    return this.students.slice();
  }

  addStudent(student: Student) {
    this.students.push(student);
    this.studentAdded.emit(this.students.slice());
  }
}

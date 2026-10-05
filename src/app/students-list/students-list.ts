import { Component } from '@angular/core';
import { Student } from '../student/student';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Student, FormsModule],
  selector: 'app-students-list',
  styleUrl: './students-list.css',
  templateUrl: './students-list.html',
})
export class StudentsList {
  students: any[] = [
    { name: "Pippo", city: "Topolinia", gender: "M", present: true },
    { name: "Pluto", city: "Topolinia", gender: "M", present: false },
    { name: "Paperina", city: "Paperopoli", gender: "F", present: true },
    { name: "Gastone", city: "Paperopoli", gender: "M", present: true },
    { name: "Minnie", city: "Topolinia", gender: "F", present: false }
  ];

  towns: string[] = [
    "Topolinia", "Paperopoli", "Bra", "Alba", "Cuneo", "Fossano", "Saluzzo"
  ]

  studentName: string = "";
  studentGender: string = "F";
  studentTown: string = "";

  onAddStudent() {
    let newStudent = {
      name: this.studentName,
      city: this.studentTown,
      gender: this.studentGender,
      present: true
    }
    this.students.push(newStudent);
  }
}

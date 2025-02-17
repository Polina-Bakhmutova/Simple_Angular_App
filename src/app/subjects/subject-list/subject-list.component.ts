import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjects = this.subjectService.getSubjects();
  }

  newSubjectName: string = '';
newSubjectTeacher: string = '';

addSubject(): void {
  if (this.newSubjectName && this.newSubjectTeacher) {
    const newId = this.subjects.length > 0 ? this.subjects[this.subjects.length - 1].id + 1 : 1;
    this.subjects.push({
      id: newId,
      name: this.newSubjectName,
      teacher: this.newSubjectTeacher
    });
    this.newSubjectName = '';
    this.newSubjectTeacher = '';
  }
}


}


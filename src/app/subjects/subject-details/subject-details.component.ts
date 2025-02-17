import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  subject: Subject | undefined;

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subject = this.subjectService.getSubjectById(id);
  }
}

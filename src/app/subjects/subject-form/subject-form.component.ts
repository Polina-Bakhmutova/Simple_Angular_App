import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../subject.model';  
import { NgForm } from '@angular/forms'; 
import { SubjectService } from '../services/subject.service'; 

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  @Input() subject: Subject = { id: 0, name: '', teacher: '' };  
  @Output() onSave: EventEmitter<Subject> = new EventEmitter();  
  @Output() onDelete: EventEmitter<number> = new EventEmitter(); 

  isEditing = false; 

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.isEditing = this.subject.id !== 0; 
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.isEditing) {
        this.subjectService.updateSubject(this.subject.id, this.subject); 
      } else {
        this.subjectService.addSubject(this.subject); 
      }
      this.onSave.emit(this.subject); 
      form.resetForm(); 
    }
  }

  onDeleteClick(): void {
    if (this.isEditing) {
      this.subjectService.deleteSubject(this.subject.id); // Удаление через сервис
      this.onDelete.emit(this.subject.id); // Сообщаем родительскому компоненту
    }
  }
}

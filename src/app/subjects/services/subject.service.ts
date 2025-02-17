import { Injectable } from '@angular/core';
import { Subject } from '../subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjects: Subject[] = [
    { id: 1, name: 'Math', teacher: 'Drozd' },
    { id: 2, name: 'Physics', teacher: 'Ivanov' },
    { id: 3, name: 'Chemistry', teacher: 'Petrov' }
  ];

  // Получить список всех предметов
  getSubjects(): Subject[] {
    return this.subjects;
  }

  // Получить предмет по id
  getSubjectById(id: number): Subject | undefined {
    return this.subjects.find(subject => subject.id === id);
  }

  // Добавить новый предмет
  addSubject(newSubject: Subject): void {
    const nextId = Math.max(...this.subjects.map(s => s.id), 0) + 1; // Генерация нового ID
    newSubject.id = nextId;
    this.subjects.push(newSubject);
  }

  // Обновить существующий предмет
  updateSubject(id: number, updatedSubject: Subject): void {
    const index = this.subjects.findIndex(subject => subject.id === id);
    if (index !== -1) {
      this.subjects[index] = { ...this.subjects[index], ...updatedSubject };
    }
  }

  // Удалить предмет
  deleteSubject(id: number): void {
    this.subjects = this.subjects.filter(subject => subject.id !== id);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCenterComponent } from './subject-center/subject-center.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubjectCenterComponent,
    SubjectListComponent,
    SubjectDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [SubjectCenterComponent]
})
export class SubjectsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectCenterComponent } from './subject-center/subject-center.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectCenterComponent,
    children: [
      { path: '', component: SubjectListComponent }, 
      { path: ':id', component: SubjectDetailsComponent }, 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule {}

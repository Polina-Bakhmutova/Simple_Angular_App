import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectCenterComponent } from './subjects/subject-center/subject-center.component';
import { SubjectDetailsComponent } from './subjects/subject-details/subject-details.component';

const routes: Routes = [
  { path: '', component: SubjectCenterComponent },
  { path: 'subject/:id', component: SubjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

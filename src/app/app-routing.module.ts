import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '',   redirectTo: '/question', pathMatch: 'full' },
  {path: 'question', component: QuestionComponent},
  {path:'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

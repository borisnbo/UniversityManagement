import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './comp/courses/courses.component';
import { DepartmentComponent } from './comp/department/department.component';
import { InstructorComponent } from './comp/instructor/instructor.component';
import { StudentComponent } from './comp/student/student.component';
import { TabcompComponent } from './comp/tabcomp/tabcomp.component';
import { HomeComponent as index} from './home/home.component';
import { DashboardComponent } from './mat/dashboard/dashboard.component';
import { TableComponent } from './mat/table/table.component';
import { AuthComponent } from './mod/auth/auth.component';
import { HomeComponent as folio } from './mod/portfolio/home.component';

const routes: Routes = [
  //{path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home', component:index}, 
  {path:'auth', component:AuthComponent},
  {path:'folio', component: folio},
  {path:'dashboard', component: DashboardComponent},
  //La plus part de ces liens vont etre re-organiser dans un module home.
  {path:'table', component: TableComponent},
  {path:'students', component: StudentComponent},
  {path:'courses', component: CoursesComponent},
  {path:'instructors', component: InstructorComponent},
  {path:'department', component: DepartmentComponent},
  {path:'tabcomp', component: TabcompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

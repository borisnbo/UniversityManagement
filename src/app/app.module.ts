import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './mod/auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModule } from './mod/portfolio/portfolio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './mat/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './mat/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TableComponent } from './mat/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StudentComponent } from './comp/student/student.component';
import { CoursesComponent } from './comp/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { TabcompComponent } from './comp/tabcomp/tabcomp.component';
import { StudentformComponent } from './comp/student/studentform/studentform.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InstructorComponent } from './comp/instructor/instructor.component';
import { DepartmentComponent } from './comp/department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    DashboardComponent,
    TableComponent,
    StudentComponent,
    CoursesComponent,
    TabcompComponent,
    StudentformComponent,
    InstructorComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule, 
    PortfolioModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //The ng-bootstrap modules
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
     MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

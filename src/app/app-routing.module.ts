import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import { UpadateComponent } from './upadate/upadate.component';

const routes:Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'residences',component:ResidencesComponent},
  {path:'newresidence',component:FormresidenceComponent},
  {path:'news',component:NewsComponent},
  {path:'newss/:id',component:NewsComponent},
  {path:'update/:id',component:UpadateComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

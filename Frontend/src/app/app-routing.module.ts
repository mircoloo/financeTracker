import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegiroComponent } from './pagesComponents/degiro/degiro.component';
import { BondoraComponent } from './pagesComponents/bondora/bondora.component';
import { HomeComponent } from './pagesComponents/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  
  {
    path: "1", 
    component: DegiroComponent
  },
  {
    path: "2", 
    component: BondoraComponent
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

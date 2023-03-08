import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegiroComponent } from './pagesComponents/degiro/degiro.component';
import { BondoraComponent } from './pagesComponents/bondora/bondora.component';

const routes: Routes = [
  {
    path: "degiro", 
    component: DegiroComponent
  },
  {
    path: "bondora", 
    component: BondoraComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

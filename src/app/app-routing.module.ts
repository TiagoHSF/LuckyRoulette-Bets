import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetComponent } from './bet/bet.component';

const routes: Routes = [
  { path: '', component: BetComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

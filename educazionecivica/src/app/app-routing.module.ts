import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoComponent } from './accesso/accesso.component';
import { MorteComponent } from './morte/morte.component';
import { PopolazioeComponent } from './popolazioe/popolazioe.component';

const routes: Routes = [
  {path:"accesso", component:AccessoComponent},
  {path: "morte", component:MorteComponent},
  {path: "popolazione", component:PopolazioeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

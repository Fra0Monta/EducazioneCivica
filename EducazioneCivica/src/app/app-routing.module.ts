import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MorteComponent } from './morte/morte.component';
import { AccessoComponent } from './accesso/accesso.component';
import { PopolazioneComponent } from './popolazione/popolazione.component';

const routes: Routes = [
  { path: 'accesso', component: AccessoComponent },
  { path: 'popolazione', component: PopolazioneComponent},
  { path: 'morte', component: MorteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

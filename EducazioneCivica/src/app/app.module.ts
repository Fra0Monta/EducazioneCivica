import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessoComponent } from './accesso/accesso.component';
import { MorteComponent } from './morte/morte.component';
import { PopolazioneComponent } from './popolazione/popolazione.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessoComponent,
    MorteComponent,
    PopolazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormulesListeComponent } from './components/formules-liste/formules-liste.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormuleComponent } from './components/formule/formule.component';
import { ReserverComponent } from './components/reserver/reserver.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ReservationsEnCoursComponent } from './components/reservations-en-cours/reservations-en-cours.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    FormulesListeComponent,
    FormuleComponent,
    ReserverComponent,
    ReservationsEnCoursComponent,
    PaiementComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

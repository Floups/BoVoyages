import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormulesListeComponent} from './components/formules-liste/formules-liste.component';
import {FormuleComponent} from './components/formule/formule.component';
import {LoginComponent} from './components/login/login.component';
import { ReserverComponent } from './components/reserver/reserver.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { ReservationsEnCoursComponent } from './components/reservations-en-cours/reservations-en-cours.component';
import {InscriptionComponent} from './components/inscription/inscription.component';


const routes: Routes = [
  {path: 'listeFormule', component: FormulesListeComponent},
  {path: 'formule/:id', component: FormuleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'paiement/:id', component: PaiementComponent},
  {path: 'reserver/:id', component: ReserverComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'mesReservations', component: ReservationsEnCoursComponent},
  {path: '**', redirectTo: 'listeFormule'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

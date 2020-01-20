import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormulesListeComponent} from './components/formules-liste/formules-liste.component';
import {FormuleComponent} from './components/formule/formule.component';
import {LoginComponent} from './components/login/login.component';
import { ReserverComponent } from './components/reserver/reserver.component';


const routes: Routes = [
  {path: 'listeFormule', component: FormulesListeComponent},
  {path: 'formule/:id', component: FormuleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reserver/:id', component: ReserverComponent},
  {path: '**', redirectTo: 'listeFormule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

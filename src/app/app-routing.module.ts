import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulesListeComponent } from './components/formules-liste/formules-liste.component';
import { FormuleComponent } from './components/formule/formule.component';


const routes: Routes = [
  {path: 'listeFormule', component: FormulesListeComponent},
  {path: 'formule/:id', component: FormuleComponent},


  { path: '**', redirectTo: 'listeFormule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

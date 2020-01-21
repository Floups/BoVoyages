import {Voyageur} from './Voyageur';
import {Formule} from './Formule';
import {CarteBancaire} from './CarteBancaire';

export class Dossier {
  static nbId = 0;
  id: number;
  numDossier: number;
  client: Voyageur;
  voyageurs: Voyageur[];
  formule: Formule;
  carteBancaire: CarteBancaire;
  prix: number;


  constructor(numDossier: number, client: Voyageur, voyageurs: Voyageur[], carteBancaire: CarteBancaire, formule: Formule, prix: number) {
    this.id = Dossier.nbId++;
    this.numDossier = numDossier;
    this.client = client;
    this.voyageurs = voyageurs;
    this.carteBancaire = carteBancaire;
    this.formule = formule;
    this.prix = prix;
  }
}

import {Voyageur} from './Voyageur';
import {Formule} from './Formule';

export class Dossier {
  static nbId = 0;
  id: number;
  numDossier: number;
  client: Voyageur;
  voyageurs: Voyageur[];
  carteBancaire: string;
  formule: Formule;


  constructor(numDossier: number, client: Voyageur, voyageurs: Voyageur[], carteBancaire: string, formule: Formule) {
    this.id = Dossier.nbId++;
    this.numDossier = numDossier;
    this.client = client;
    this.voyageurs = voyageurs;
    this.carteBancaire = carteBancaire;
    this.formule = formule;
  }
}

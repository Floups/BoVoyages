import {Destination} from './Destination';

export class Formule {
  id: string;
  // tslint:disable-next-line:variable-name
  date_depart: Date;
  // tslint:disable-next-line:variable-name
  date_retour: Date;
  // tslint:disable-next-line:variable-name
  prix_ht: number;
  // tslint:disable-next-line:variable-name
  nb_places: number;
  destination: Destination;
  promotion: number;


  // tslint:disable-next-line:variable-name
  constructor(id: string, date_depart: Date, date_retour: Date, prix_ht: number, nb_places: number, destination: Destination,
              promotion: number) {
    this.id = id;
    this.date_depart = date_depart;
    this.date_retour = date_retour;
    this.prix_ht = prix_ht;
    this.nb_places = nb_places;
    this.destination = destination;
    this.promotion = promotion;
  }
}

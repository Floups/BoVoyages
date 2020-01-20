export class Voyageur {
  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  // tslint:disable-next-line:variable-name
  date_naissance: Date;
  adresse: string;
  numTel: string;

  // tslint:disable-next-line:variable-name
  constructor(id: number, civilite: string, nom: string, prenom: string, date_naissance: Date, adresse: string, numTel: string) {
    this.id = id;
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.adresse = adresse;
    this.numTel = numTel;

  }
}

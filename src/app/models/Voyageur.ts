export class Voyageur {
  id: string;
  civilite: string;
  nom: string;
  prenom: string;
  // tslint:disable-next-line:variable-name
  date_naissance: Date;
  adresse: string;
  numTel: string;
  password: string;
  mail: string;

  // tslint:disable-next-line:variable-name
  constructor(id: string, civilite: string, nom: string, prenom: string, date_naissance: Date, adresse: string, numTel: string,
              password: string = null, mail: string = null) {
    this.id = id;
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.adresse = adresse;
    this.numTel = numTel;
    this.password = password;
  }
}

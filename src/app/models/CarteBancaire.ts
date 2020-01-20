export class CarteBancaire {
    nomDetenteur: string;
    numero: string;
    dateValidation: Date;
    codeSecret: string;
    
      constructor(nomDetenteur: string, numero: string, dateValidation: Date, codeSecret: string) {
      this.nomDetenteur = nomDetenteur;
      this.numero = numero;
      this.dateValidation = dateValidation;
      this.codeSecret = codeSecret;
    }
  }
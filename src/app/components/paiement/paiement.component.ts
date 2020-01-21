import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { DossierService } from 'src/app/shared/dossier.service';
import { Router } from '@angular/router';
import { Dossier } from 'src/app/models/Dossier';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {


  CBForm: FormGroup;

  constructor(private router: Router, private dossierService: DossierService) { }


isChecked=false;

changevalue(){
  if (this.isChecked==false) {
    this.isChecked=true;   
  }
  else if (this.isChecked==true) {
    this.isChecked=false;  
  }
  return this.isChecked;
}

  ngOnInit() {

    this.CBForm = new FormGroup({
      civilitenomDetenteur: new FormControl(),
      numero: new FormControl(),
      dateValidation: new FormControl(),
      codeSecret: new FormControl(),
    })
  }

  
  Validation() {
    if (this.changevalue()==true) {
     //
      
    }
    alert('Paiement effectué');
    this.router.navigate(['/listeFormule'])
  }




  onSubmit() {

    if (this.CBForm.valid) {
      const dossier = this.CBForm.value;
      this.dossierService.updateDossier(1, dossier)
        .subscribe(
          () => this.Validation()
        )

    }
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { DossierService } from 'src/app/shared/dossier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {


CBForm: FormGroup;

  constructor(private router: Router, private dossierService: DossierService) { }





  ngOnInit() {

   this.CBForm= new FormGroup({
        civilitenomDetenteur: new FormControl(),
        numero: new FormControl(),
        dateValidation: new FormControl(),
        codeSecret: new FormControl(),
        })


  }


  onSubmit(){

    if(this.CBForm.valid){

      const dossier = this.CBForm.value;
      this.dossierService.updateDossier(1,dossier)
      .subscribe(
        () => this.router.navigate(['/paiement'])
      )
      
    }
  }


}

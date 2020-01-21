import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {DossierService} from 'src/app/shared/dossier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Dossier} from 'src/app/models/Dossier';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {


  cbForm: FormGroup;
  dossier: Dossier;

  constructor(private router: Router, private dossierService: DossierService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.cbForm = new FormGroup({
      carteBancaire: new FormGroup({
        civilitenomDetenteur: new FormControl('', [Validators.required]),
        numero: new FormControl('', [Validators.required, Validators.minLength(16), CustomValidators.number]),
        dateValidation: new FormControl('', [Validators.required, CustomValidators.minDate(new Date())]),
        codeSecret: new FormControl('', [Validators.required, Validators.minLength(3), CustomValidators.number]),
      }),
      assurance: new FormControl()
    });
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.dossierService.getDossier(id).subscribe(result => {
        this.dossier = result;
      });
    });
  }


  onSubmit() {
    if (this.cbForm.valid) {
      this.dossier.carteBancaire = this.cbForm.value.carteBancaire;
      if (this.cbForm.value.assurance) {
        this.dossier.assurance = true;
      }
      console.log(this.dossier);
      this.dossierService.updateDossier(this.dossier)
        .subscribe(
          () => this.router.navigate(['listeFormule'])
        );

    }
  }


}

import {Component, OnInit} from '@angular/core';
import {FormuleService} from 'src/app/shared/formule.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {DossierService} from 'src/app/shared/dossier.service';
import {Dossier} from '../../models/Dossier';
import {Voyageur} from '../../models/Voyageur';
import {VoyageurService} from '../../shared/voyageur.service';
import {Formule} from '../../models/Formule';
import {AuthService} from '../../shared/auth.service';
import * as moment from 'moment';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  DossierForm: FormGroup;
  client: Voyageur;
  formule: Formule;


  constructor(private formuleService: FormuleService, private router: Router, private dossierService: DossierService,
              private activatedRoute: ActivatedRoute, private voyageurService: VoyageurService, private authService: AuthService) {
  }


  get voyageurs(): FormArray {
    return this.DossierForm.get('voyageurs') as FormArray;
  }

  remove(index) {
    this.voyageurs.removeAt(index);
  }


  addVoyageur() {
    this.voyageurs.push(
      new FormGroup({
        civilite: new FormControl('', [Validators.required]),
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        date_naissance: new FormControl('', [Validators.required]),
        adresse: new FormControl('', [Validators.required]),
        numTel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]),

      })
    );
  }

  ngOnInit() {

    this.DossierForm = new FormGroup({
      voyageurs: new FormArray([])
    });
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.formuleService.getFormule(id).subscribe(result => {
        this.formule = result;
      });
    });
    this.voyageurService.getVoyageur(this.authService.getId()).subscribe(result => {
      this.client = result;
    });
  }

  onSubmit() {
    if (this.DossierForm.valid) {
      let prix = 0;
      let date = moment(this.client.date_naissance);
      let age = moment().subtract(date.year(), 'year');
      age.subtract(date.month(), 'month');
      if (age.year() > 12) {
        prix += +this.formule.prix_ht;
      } else {
        prix += +this.formule.prix_ht * 0.4;
      }
      this.DossierForm.value.voyageurs.forEach(e => {
        date = moment(e.date_naissance);
        age = moment().subtract(date.year(), 'year');
        age.subtract(date.month(), 'month');
        if (age.year() > 12) {
          prix += +this.formule.prix_ht;
        } else {
          prix += +this.formule.prix_ht * 0.4;
        }
      });
      dossier.voyageurs = this.voyageurs.value;
      const dossier = new Dossier(50, this.client, [], null, this.formule, prix, false);
      this.dossierService.createDossier(dossier)
        .subscribe(
          () => this.router.navigate(['/paiement'])
        );

    }
  }


}



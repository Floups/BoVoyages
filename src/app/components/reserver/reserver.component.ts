import { Component, OnInit } from '@angular/core';
import { FormuleService } from 'src/app/shared/formule.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DossierService } from 'src/app/shared/dossier.service';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private formuleService: FormuleService, private router: Router, private dossierService: DossierService) { }


  get voyageurs(): FormArray {
    return this.clientForm.get('voyageurs') as FormArray;
  }

  remove(index){
    this.voyageurs.removeAt(index);
  }


  addVoyageur(){
    this.voyageurs.push(
      new FormGroup({
        civilite: new FormControl('', [Validators.required]),
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        date_naissance: new FormControl('', [Validators.required]),
        adresse: new FormControl('', [Validators.required]),
        numTel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),

      })
    );
  }

  ngOnInit() {

    this.clientForm =new FormGroup({
      voyageurs: new FormArray([
      new FormGroup({
        civilite: new FormControl('', [Validators.required]),
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        date_naissance: new FormControl('', [Validators.required]),
        adresse: new FormControl('', [Validators.required]),
        numTel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),

      })
    ])})
  }

  onSubmit(){

    if(this.clientForm.valid){

      const client = this.clientForm.value;
      this.dossierService.createDossier(client)
      .subscribe(
        () => this.router.navigate(['/paiement'])
      )
      
    }
  }





}



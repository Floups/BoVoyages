import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {VoyageurService} from '../../shared/voyageur.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(private voyageurService: VoyageurService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.inscriptionForm = new FormGroup({
      civilite: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      date_naissance: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      numTel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const voyageur = this.inscriptionForm.value;
      console.log(voyageur);
      this.voyageurService.createVoyageur(voyageur).subscribe((e) => {
        this.authService.authentify(e.mail, e.password);
        this.router.navigate(['/listeFormule']);
      });
    }
  }

}

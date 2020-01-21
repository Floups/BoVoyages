import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DossierService} from 'src/app/shared/dossier.service';
import {Dossier} from 'src/app/models/Dossier';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-reservations-en-cours',
  templateUrl: './reservations-en-cours.component.html',
  styleUrls: ['./reservations-en-cours.component.css']
})
export class ReservationsEnCoursComponent implements OnInit {

  constructor(private router: Router, private dossierService: DossierService, private authService: AuthService) {
  }

  public dossiers: Dossier[] = [];

  trouverDossiers() {
    this.dossierService.getDossiers().subscribe(
      (result) => {
        this.dossiers = result.filter(e => e.client.id === this.authService.getId());
      }
    );
  }

  ngOnInit() {
    this.trouverDossiers();
  }

  deleteDossier(id) {
    this.dossierService.deleteDossier(id).subscribe(() => this.trouverDossiers());
  }

}


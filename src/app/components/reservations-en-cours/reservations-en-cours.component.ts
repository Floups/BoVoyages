import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DossierService } from 'src/app/shared/dossier.service';
import { Dossier } from 'src/app/models/Dossier';

@Component({
  selector: 'app-reservations-en-cours',
  templateUrl: './reservations-en-cours.component.html',
  styleUrls: ['./reservations-en-cours.component.css']
})
export class ReservationsEnCoursComponent implements OnInit {

  constructor(private router: Router, private dossierService: DossierService) { }

  public dossiers: Dossier[] = [];

  
  ngOnInit() {
    this.dossierService.getDossiers().subscribe(
      (result) => {
        this.dossiers = result;
      }
      );
    }
    





}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormuleService } from 'src/app/shared/formule.service';

@Component({
  selector: 'app-formule',
  templateUrl: './formule.component.html',
  styleUrls: ['./formule.component.css']
})
export class FormuleComponent implements OnInit {


public formule;

  constructor(private activatedRoute: ActivatedRoute, private formuleService: FormuleService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      ( params ) => { 
        
        const idformule = params.get('id');
        this.formuleService.getFormule(idformule).subscribe(
          (formule) => this.formule = formule
        );        
      }
    )
  }

}

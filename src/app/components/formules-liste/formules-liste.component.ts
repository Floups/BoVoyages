import { Component, OnInit } from '@angular/core';
import { FormuleService } from 'src/app/shared/formule.service';
import { Formule } from 'src/app/models/Formule';

@Component({
  selector: 'app-formules-liste',
  templateUrl: './formules-liste.component.html',
  styleUrls: ['./formules-liste.component.css']
})
export class FormulesListeComponent implements OnInit {



  public formules: Formule[] = [];
  

  constructor(private formuleService: FormuleService) { }

  ngOnInit() {
    this.formuleService.getFormules().subscribe(
      (result) => {        
        this.formules = result;
      }
    );


  }

}

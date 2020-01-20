import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formule',
  templateUrl: './formule.component.html',
  styleUrls: ['./formule.component.css']
})
export class FormuleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}

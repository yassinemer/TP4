import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  @Input() name: string="";
  @Input() age:number=0;
  @Input('etud') statut:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-listpersonnes',
  templateUrl: './listpersonnes.component.html',
  styleUrls: ['./listpersonnes.component.css']
})
export class ListpersonnesComponent implements OnInit {

  lespersonnes: Personne[] = [
 new Personne('Ali MBARKI', 21, true),
 new Personne('Amira SMIRI', 32, false),
 new Personne('Rania MEDDEB', 19, true),
 new Personne('Sami TLILI',52, false)
 ]

  constructor() { }

  ngOnInit(): void {
  }

}

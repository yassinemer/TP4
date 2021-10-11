import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-lapersonne',
  templateUrl: './lapersonne.component.html',
  styleUrls: ['./lapersonne.component.css']
})
export class LapersonneComponent implements OnInit {

  @Input() pers:Personne=new Personne();

  

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() p:Pizza=new Pizza();

  t:boolean=true;
  aff() {
    this.t=!this.t;

  }
  constructor() { }

  ngOnInit(): void {
  }

}

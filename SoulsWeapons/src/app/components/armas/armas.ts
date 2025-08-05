import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import cardsData from '../../../assets/data/cards.json';
import { Router } from '@angular/router';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-armas',
  imports: [Cards, CommonModule],
  templateUrl: './armas.html',
  styleUrl: './armas.css'
})
export class Armas {
 cards: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cards = cardsData;
  }

    home() {
    this.router.navigate(['/dashboardGame']);
  }

}

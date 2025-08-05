import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [FormsModule,CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  flip: boolean = false;
  @Input() data: any;
  atributoKeys: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.atributoKeys = Object.keys(this.data.atributos);
  }


}

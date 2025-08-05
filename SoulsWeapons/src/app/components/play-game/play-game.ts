// play-game.component.ts
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { GameData } from '../../services/game-data';
import { CardComparisonDto, Carta } from '../dashboard-play/player.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-play-game',
  imports: [CommonModule, FormsModule ],
  animations: [
    // Animación para las cartas
    trigger('dealAnimation', [
      state('waiting', style({ transform: 'scale(0)', opacity: 0 })),
      state('dealt', style({ transform: 'scale(1)', opacity: 1 })),
      transition('waiting => dealt', [
        animate('300ms ease-out')
      ])
    ])
  ],
  templateUrl: './play-game.html',
  styleUrl: './play-game.css'
})
export class PlayGame implements OnInit {
  countdownValue = 3;
countdownText = '';
showCountdown = true;
turnIndex: number = 0;
currentTurnPlayer: any = null;
currentTurnPlayerId: number = 0; // el id del jugador actual
currentPlayerId: number = 0;     // el id del jugador que está en esta vista
cartasJugador: Carta[] = []; // cartas del jugador actual
playerAtributte: string = '';
selectedCard: Carta | null = null;

  cardsDealt = false;
  gamePlayers: any[] = [];
  roomId: number | null = null;

  constructor(private gameDataService: GameData) {}


  ngOnInit(): void {
  this.gamePlayers = this.gameDataService.getJugadores();
  this.currentTurnPlayer = this.gamePlayers[this.turnIndex];
  this.cartasJugador = this.currentTurnPlayer?.cards ?? []; // Asignación segura
  console.log(this.cartasJugador);
  const roomIdString = localStorage.getItem('roomId');
this.roomId = roomIdString ? Number(roomIdString) : null;
  // this.startCountdown();
}


  // Calcular posición de cada jugador en círculo
  getPlayerPosition(index: number, total: number) {
    const angle = (360 / total) * index - 90; // -90 para empezar desde arriba
    const radius = 35; // Porcentaje desde el centro

    const x = 50 + radius * Math.cos(angle * Math.PI / 180);
    const y = 50 + radius * Math.sin(angle * Math.PI / 180);

    return {
      left: `${x}%`,
      top: `${y}%`
    };
  }

  startGame() {
    console.log('Juego iniciado');
  }


nextTurn() {
  this.turnIndex = (this.turnIndex + 1) % this.gamePlayers.length;
  this.currentTurnPlayer = this.gamePlayers[this.turnIndex];
  this.cartasJugador = this.currentTurnPlayer?.cards ?? [];
}
submitResponse() {
  if (this.playerAtributte.trim()) {

  //    const dto: CardComparisonDto = {
  //     attributeComparison: this.playerAtributte,
  //     roomId: this.roomId,
  //     playersSelectedCards: this.playerCards
  //   };

  //   this.gameService.compareCards(dto).subscribe(
  //     (res) => {
  //       console.log('Resultado:', res);
  //       // Puedes actualizar el ganador aquí
  //     },
  //     (err) => {
  //       console.error('Error al comparar:', err);
  //     }
  //   );
  // }
    // Aquí puedes emitir el texto al servidor o guardar localmente
    console.log(`Descripción enviada: ${this.playerAtributte}`);

    // Opcional: pasar al siguiente turno
    this.siguienteTurno();
  }
}

siguienteTurno() {
  console.log('Siguiente turno');
}

}

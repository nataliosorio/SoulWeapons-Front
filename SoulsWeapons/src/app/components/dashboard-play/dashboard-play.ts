import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-play',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard-play.html',
  styleUrl: './dashboard-play.css'
})
export class DashboardPlay {
  playerCount: number = 2;
  availablePlayers: string[] = ['Ana', 'Luis', 'Carlos', 'María', 'Juan'];
  selectedPlayers: string[] = [];

  onPlayerCountChange() {
    this.selectedPlayers = [];
  }

  addPlayer(player: string) {
    if (!this.selectedPlayers.includes(player) && this.selectedPlayers.length < this.playerCount) {
      this.selectedPlayers.push(player);
    }
  }

  startGame() {
    const gameData = {
      cantidad: this.playerCount,
      jugadores: this.selectedPlayers
    };
    // console.log('🎮 Datos del juego:', JSON.stringify(gameData));
    console.log('🎮 Datos del juego:',gameData);

  }


  showAddForm: boolean = false;
newPlayerName: string = '';

confirmAddNewPlayer() {
  const name = this.newPlayerName.trim();
  console.log(name);
  if (name && !this.availablePlayers.includes(name)) {
    this.availablePlayers.push(name);
    this.newPlayerName = '';
    this.showAddForm = false;
  } else {
    alert('Ese nombre ya existe o está vacío.');
  }
}


}

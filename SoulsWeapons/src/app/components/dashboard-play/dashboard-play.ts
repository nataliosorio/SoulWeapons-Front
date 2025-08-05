import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import PlayerData from '../../../assets/data/players.json';
import { HttpClient } from '@angular/common/http';
import { Player } from './player.interface';


@Component({
  selector: 'app-dashboard-play',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard-play.html',
  styleUrl: './dashboard-play.css'
})
export class DashboardPlay {

   playerCount: number = 2;

   availablePlayers: Player[] = [];
selectedPlayers: Player[] = [];

  showAddForm: boolean = false;
  newPlayerName: string = '';

  constructor(private http: HttpClient, private router: Router) {}

ngOnInit(): void {
  this.http.get<Player[]>('assets/data/players.json').subscribe((data) => {
    this.availablePlayers = data;
  });
}

  onPlayerCountChange() {
    this.selectedPlayers = [];
  }

 addPlayer(player: Player) {
  const yaExiste = this.selectedPlayers.some(p => p.id === player.id);

  if (!yaExiste && this.selectedPlayers.length < this.playerCount) {
    this.selectedPlayers.push(player);
  }
}

confirmAddNewPlayer() {
  const name = this.newPlayerName.trim();

  const yaExiste = this.availablePlayers.some(p => p.nombre.toLowerCase() === name.toLowerCase());

  if (name && !yaExiste) {
    const nuevoJugador: Player = {
      id: this.availablePlayers.length + 1, // o usa otro generador
      nombre: name
    };

    this.availablePlayers.push(nuevoJugador);
    this.newPlayerName = '';
    this.showAddForm = false;
  } else {
    alert('Ese nombre ya existe o está vacío.');
  }
}


startGame() {
  const gameData = {
    cantidad: this.playerCount,
    jugadores: this.selectedPlayers
  };

  localStorage.setItem('datosJuego', JSON.stringify(gameData));

  this.router.navigate(['/playGame']);
}



  viewArmas() {
    this.router.navigate(['/armas']);
  }

}

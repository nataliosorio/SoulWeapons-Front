import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import PlayerData from '../../../assets/data/players.json';
import { HttpClient } from '@angular/common/http';
import { Player } from './player.interface';
import { General } from '../../services/general';
import { GameData } from '../../services/game-data';


@Component({
  selector: 'app-dashboard-play',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard-play.html',
  styleUrl: './dashboard-play.css'
})
export class DashboardPlay {
  players: any[] = [];
  gamePlayers: any[] = [];
   playerCount: number = 2;

   availablePlayers: Player[] = [];
selectedPlayers: Player[] = [];

  showAddForm: boolean = false;
  newPlayerName: string = '';

  constructor(private http: HttpClient, private router: Router, private general: General,  private gameDataService: GameData) {}

ngOnInit(): void {
   this.getPlayers();

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

  const yaExiste = this.availablePlayers.some(p => p.name.toLowerCase() === name.toLowerCase());

  if (name && !yaExiste) {
    const nuevoJugador: Player = {
      id: this.availablePlayers.length + 1,
      name: name // <-- antes era 'nombre'
    };


    this.availablePlayers.push(nuevoJugador);
    this.newPlayerName = '';
    this.showAddForm = false;
  } else {
    alert('Ese nombre ya existe o está vacío.');
  }
}


startGame() {
  const jugadoresAEnviar = this.selectedPlayers.map(p => ({
    id: p.id,
    name: p.name
  }));

  this.general.post<any>('Room/CreateRoom', jugadoresAEnviar).subscribe({
    next: (response) => {
      this.gameDataService.setJugadores(response.data);
      this.router.navigate(['/playGame']);
      localStorage.setItem('roomId', response.data.roomId);
    },
    error: (err) => {
      console.error('Error al crear la sala:', err);
      alert('Ocurrió un error al crear la sala.');
    }
  });
}



  viewArmas() {
    this.router.navigate(['/armas']);
  }


  getPlayers() {
  this.general.get<any>('Player/GetAll').subscribe({
    next: (response) => {
      this.players = response.data; // <<--- aquí accedemos al array real
    },
    error: (err) => {
      console.error('Error al obtener jugadores:', err);
    }
  });
}

}

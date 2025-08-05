import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameData {
  private jugadores: any[] = [];

  setJugadores(data: any[]) {
    this.jugadores = data;
  }

  getJugadores() {
    return this.jugadores;
  }
}

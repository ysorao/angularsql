import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];

  constructor( private gameService: GamesService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    );
  }

}

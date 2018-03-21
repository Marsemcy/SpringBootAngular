import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/players').subscribe(data => { this.players = data;
  }
);
}


}

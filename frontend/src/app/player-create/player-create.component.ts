import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  player = {};

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  savePlayer() {
    this.http.post('/players', this.player)
      .subscribe(res => {
          this.router.navigate(['/player-detail', res]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html', styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  player = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.getPlayerDetail(this.route.snapshot.params['id']);
  }

  getPlayerDetail(id) {
    this.http.get('/players/' + id).subscribe(data => {
      this.player = data;
    });
  }

  deletePlayer(id) {
    this.http.delete('/players/' + id).subscribe(res => {
        this.router.navigate(['/player']);
      }, (err) => {
        console.log(err);
      }
    );
  }

}

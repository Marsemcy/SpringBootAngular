import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html', styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  player = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPlayer(this.route.snapshot.params['id']);
  }

  getPlayer(id) {
    this.http.get('/players/' + id).subscribe(data => {
      this.player = data;
    });
  }

  updatePlayer(id, data) {
    this.http.put('/players/' + id, data).subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/player-detail', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }
}

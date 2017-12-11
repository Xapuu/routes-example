import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'x-wrong-team',
  templateUrl: './wrong-team.component.html',
  styleUrls: ['./wrong-team.component.scss']
})
export class WrongTeamComponent implements OnInit {
  team: {};
  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(d => {
      this.team = d
    });
  }

  goBack() {
    this.location.back()
  }
}

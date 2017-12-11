import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'x-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  team: {};
  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(d => {
      console.log(d)
      this.team = d
    });
  }

  goBack() {
    this.location.back()
  }
}

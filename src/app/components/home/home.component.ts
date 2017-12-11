import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'x-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  select(d) {
    let path = d.target.innerHTML.toLowerCase().replace(' ', '')
    sessionStorage.setItem('team', path)

    this.router.navigate(['/logged'])
    console.log('in')
  }

}

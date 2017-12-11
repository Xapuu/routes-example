import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'x-home-logged',
  templateUrl: './home-logged.component.html',
  styleUrls: ['./home-logged.component.scss']
})
export class HomeLoggedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  select(d) {
    let path = d.target.innerHTML.toLowerCase().replace(' ', '')
    this.router.navigate(['/' + path])
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['/'])
  }
}

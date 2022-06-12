import { Component, OnInit } from '@angular/core';
import { NavigationInterface } from '../interfaces/navigation';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  public navigation: NavigationInterface[] = [
    {
      label: 'Dashboard',
      link: '/dashboard'
    },
    {
      label: 'Users list',
      link: '/users'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

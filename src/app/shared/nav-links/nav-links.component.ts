import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationInterface } from '../interfaces/navigation';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  @Input() isAdmin: boolean

  public navigation: NavigationInterface[] = [
    {
      label: 'Dashboard',
      link: '/dashboard',
    },
    {
      label: 'Users list',
      link: '/users'
    },
  ]

  public navigationAdmin: NavigationInterface[] = [
    {
      label: 'Dashboard',
      link: '/dashboard',
    },
  ]

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}

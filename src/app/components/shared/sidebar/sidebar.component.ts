import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userName: string = "Hector Roa Castillo ASDASD";

  userEmail: string = "hroa.castillo@gmail.com";

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(document.querySelector('#nav-toggle'));
  }

  mostrarMenu = () => {
    const toggle = document.querySelector('#nav-toggle');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');
    
    toggle.classList.toggle('rotate');
    nav.parentElement.classList.toggle('show');
    body.classList.toggle('expander');
  }

  logout() {
    this.router.navigate(['/login']);
  }

}

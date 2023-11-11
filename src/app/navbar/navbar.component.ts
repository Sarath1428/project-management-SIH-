import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private router: Router){
}

gotoroutepage(routepage:any){
console.log("button is clicked")
this.router.navigate([`${routepage}`]);
}
}

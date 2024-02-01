import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  
  constructor( private router: Router) {}

  navigateToList(): void {
    this.router.navigate(["list"])
    
  }

  navigateEventToList(): void{
    this.router.navigate(["event/list-events"]).then();
  }

}

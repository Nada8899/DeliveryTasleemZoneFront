import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  /**
   *
   */
  constructor(private router :Router) {
   
    
  }
  route(){
    this.router.navigate(['/delivery/ProfileData']);
  }
  
}

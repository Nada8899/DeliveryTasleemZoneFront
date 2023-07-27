import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/auth/Services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
//   isLoggedIn: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//    isClient: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//    isDelievry: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//    isAdmin: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//   testToken!: any;

//   constructor(private _LoginService: LoginService, private _Router: Router) {
//   }
//   ngOnInit(): void {
//     const userToken: string | null = localStorage.getItem('userToken');
// //check local empty or not
// console.log("checccck")


// if (userToken !== null && userToken !== 'null') {
//   console.log("3bs")
//   this.isLoggedIn.next(1);
//   this._LoginService.saveUserData() // Set the user token in the service
// } else {
//   console.log("3bsssss")

//   this.isLoggedIn.next(0);
//   this._LoginService.userData.next(null); // Clear the user token in the service
// }

// this.testToken= JSON.stringify(localStorage.getItem('userToken'));



// if (this._LoginService.userData.getValue() != null
// && this.testToken != null && localStorage.length != 0) {

// this.isLoggedIn.next(1)
// }
// else {
// this.isLoggedIn.next(0);
// this.isClient.next(0);
// this.isDelievry.next(0);
// this.isAdmin.next(0);

// }
// if (this._LoginService.getUserRole() == "Delivery") {
//   this.isDelievry.next(1);
// }
// else {
//   this.isDelievry.next(0);
// }
//  console.log(this._LoginService.getUserRole() )
// if (this._LoginService.getUserRole() == "Client") {
//   this.isClient.next(1);
// }
// else {
//   this.isClient.next(0);
// }
// if (this._LoginService.getUserRole() == "Admin") {
//   this.isAdmin.next(1);
// }
// else {
//   this.isAdmin.next(0);
// }



// }
// Logout(){
//   this._LoginService.LogOut();
// }

isLoggedIn = false;
isClient = false;
isDelivery = false;
isAdmin = false;

constructor(private _LoginService: LoginService, private _Router: Router) {}

ngOnInit(): void {
  this._LoginService.userData.subscribe((userData) => {
    if (userData !== null) {
      this.isLoggedIn = true;
      this.isClient = this._LoginService.getUserRole() === 'Client';
      this.isDelivery = this._LoginService.getUserRole() === 'Delivery';
      this.isAdmin = this._LoginService.getUserRole() === 'Admin';
    } else {
      this.isLoggedIn = false;
      this.isClient = false;
      this.isDelivery = false;
      this.isAdmin = false;
    }
  });
}

Logout() {
  this._LoginService.LogOut();
}
}

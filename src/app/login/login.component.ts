import { Component, OnInit } from '@angular/core';
import {User, UserRights} from '../shared/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userRights: UserRights[];
  allUsers: User[];
  newuser: User;
  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.newuser=new User();
    this.user=new User();
    this.getUserRights();
    this.getAllUsers();
  }

  registerOnSubmit(){
        this.userService.addUser(this.newuser).subscribe(
            ()=>{
                this.newuser=new User();
            })
      console.log("Added new User");
  }

  loginOnSubmit(){
      for(let tempuser of this.allUsers){
         if(tempuser.username==this.user.username){
             this.router.navigate(['/driversList']);
         }
      }
  }

  getUserRights(){
      this.userService.getUserRights().subscribe(
          (userRightsList: UserRights[])=>{
              this.userRights=userRightsList;
          })
  }

  getAllUsers(){
      this.userService.getAllUsers().subscribe(
          (tempUsers: User[])=>{
              this.allUsers=tempUsers;
          })
  }

}

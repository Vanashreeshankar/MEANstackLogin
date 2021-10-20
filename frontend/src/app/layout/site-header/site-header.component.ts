import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  username: String='';
  constructor(private _user:UserService, private _router:Router){
    
  }
 
  
  addName(data){
   this.username = data.username;
  }

  ngOnInit() {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data => {console.log(data); this._router.navigate(['/login']) },
      error => console.error(error)
    )
  }

}
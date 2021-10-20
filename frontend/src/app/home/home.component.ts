import {Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { Email } from '../Email.model';
import { EmailService } from '../services/email.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    ELEMENT_DATA: Email[] = [];
    displayedColumns: string[] = ['type', 'email_id', 'category', 'actions'];
   
  constructor(private _user:UserService, private _email: EmailService, private _router:Router){
  
  }
  ngOnInit() {
    this.fetchEmails();
  }

  fetchEmails() {
    this._email
      .getEmails()
      .subscribe((data: Email[]) => {
        this.ELEMENT_DATA = data;
        console.log('Data requested ...');
        console.log(this.ELEMENT_DATA);
      });
  }

  editEmail(id) {
    this._router.navigate([`/edit/${id}`]);
  }

  deleteEmail(id) {
    this._email.deleteEmail(id).subscribe(() => {
      this.fetchEmails();
    });
  }
  

}
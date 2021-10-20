import {Component} from '@angular/core';
import { UserService } from '../services/user.service';
import { EmailService } from '../services/email.service';
import { Router } from '@angular/router';
import { Email } from '../Email.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  ELEMENT_DATA: Email[] = [];
  displayedColumns: string[] = ['type', 'email_id', 'category', 'actions'];

  constructor(private _user:UserService, private email: EmailService,  private _router:Router) {} 

}


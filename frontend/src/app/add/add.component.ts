import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
 
})
export class AddComponent implements OnInit {

  createForm: FormGroup;

  constructor(private _email: EmailService, private _fb: FormBuilder, private _router: Router) {
    this.createForm = this._fb.group({
      type: ['', Validators.required],
      email_id: '',
      category: ''
    });
  }

  addEmail(type, email_id, category) {
    this._email.addEmail(type, email_id, category).subscribe(() => {
      this._router.navigate(['/home']);
    });
  }

 

  ngOnInit() {
  }

}
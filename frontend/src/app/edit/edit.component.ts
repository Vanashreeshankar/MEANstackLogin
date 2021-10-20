import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String = '';
  email: any = {};
  updateForm !: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private _email: EmailService, private _router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private _fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this._fb.group({
      type: ['', Validators.required] ,
      email_id: '',
      category: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this._email.getEmailById(this.id).subscribe(res => {
        this.email = res;
        this.updateForm.get['type'].setValue(this.email.type);
        this.updateForm.get['email_id'].setValue(this.email.email_id);
        this.updateForm.get['category'].setValue(this.email.category);
        
      });
    });
  }

  updateEmail(type, email_id, category) {
    this._email.updateEmail(this.id, type, email_id, category).subscribe(() => {
      this.snackBar.open('Id updated successfully', 'OK', {
        duration: 3000
      });
    });
  }


}
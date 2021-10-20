import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../Email.model';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<Email[]>(`${this.uri}/emails`);
  }

  getEmailById(id) {
    return this.http.get(`${this.uri}/emails/${id}`);
  }

  addEmail(type, email_id, category) {
    const email = {
      type: type,
      email_id: email_id,
      category: category,
      
    };
    return this.http.post(`${this.uri}/emails/add`, email);
  }

  updateEmail(id, type, email_id, category) {
    const email = {
      type: type,
      email_id: email_id,
      category: category,
      
    };
    return this.http.post(`${this.uri}/emails/update/${id}`, email);
  }

  deleteEmail(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }

}

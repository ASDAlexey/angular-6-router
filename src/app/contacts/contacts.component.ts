import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  users$;

  constructor(private http: HttpClient) {
    this.users$ = http.get('http://jsonplaceholder.typicode.com/users');
  }

  trackById(index, item) {
    return item.id;
  }
}

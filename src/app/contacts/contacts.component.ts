import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  todos$;

  constructor(private http: HttpClient) {
    this.todos$ = http.get('http://jsonplaceholder.typicode.com/todos');
  }

  trackById(index, item) {
    return item.id;
  }
}

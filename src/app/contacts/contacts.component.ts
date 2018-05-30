import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  users$;

  constructor(private http: HttpClient, private appService: AppService) {
    this.users$ = http.get('http://jsonplaceholder.typicode.com/users');
    console.log('Contacts component', appService.getData());
  }

  trackById(index, item) {
    return item.id;
  }
}

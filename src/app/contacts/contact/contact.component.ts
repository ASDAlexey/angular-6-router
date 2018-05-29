import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, startWith } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  user$ = new BehaviorSubject({ name: 'Loading', website: 'Loading' });

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const api = 'http://jsonplaceholder.typicode.com/';
    route.params.pipe(
      // map((p: any) => p.id),
      switchMap((p: any) => (http.get(`${api}users/${p.id}`))),
      map((contact: any) => Object.assign({}, contact, { website: api + contact.website })),
      // startWith({ name: 'Loading', website: 'Loading' }),
    ).subscribe(this.user$);
  }
}

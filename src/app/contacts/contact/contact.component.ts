import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  id: Observable<number>;

  constructor(private route: ActivatedRoute) {
    this.id = route.params.pipe(map((p: any) => p.id));
  }
}

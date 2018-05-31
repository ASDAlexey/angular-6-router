import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bio',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: number;
  params$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.params$ = this.route.params;
    console.log('Item', this.route.snapshot.queryParams);
  }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.id = +this.route.snapshot.params.id;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  id: number;
  params$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.params$ = this.route.params;
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}

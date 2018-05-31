import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { get, map } from 'lodash';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  params$;

  constructor(private route: ActivatedRoute) {
    this.params$ = combineLatest([...map(route.children, 'params')], (...params) => (Object.assign({}, ...params)));
  }

  ngOnInit() {
  }
}

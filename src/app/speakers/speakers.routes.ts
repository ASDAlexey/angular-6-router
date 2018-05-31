import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SpeakersComponent } from './speakers.component';

const routes = [
  {
    path: 'speakers', component: SpeakersComponent, children: [
      { path: 'list', component: ListComponent, outlet: 'list' },
      { path: ':id', component: ItemComponent, outlet: 'item' }
    ]
  }
];

export const speakersRoutes = RouterModule.forChild(routes);

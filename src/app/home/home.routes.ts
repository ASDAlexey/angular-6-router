import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: HomeComponent },
];

export const homeRoutes = RouterModule.forChild(routes);

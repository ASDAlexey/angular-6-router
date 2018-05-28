import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: ContactsComponent },
];

export const contactsRoutes = RouterModule.forChild(routes);

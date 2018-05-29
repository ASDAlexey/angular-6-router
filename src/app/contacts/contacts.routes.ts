import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact/contact.component';

const routes = [
  { path: '', component: ContactsComponent },
  { path: ':id', component: ContactComponent },
];

export const contactsRoutes = RouterModule.forChild(routes);

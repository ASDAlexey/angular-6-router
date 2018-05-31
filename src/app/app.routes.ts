import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: '', loadChildren: './speakers/speakers.module#SpeakersModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
];

export const appRoutes = RouterModule.forRoot(routes);

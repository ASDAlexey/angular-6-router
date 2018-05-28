import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import appRoutes from './app.routes';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}

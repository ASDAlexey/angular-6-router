import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact/contact.component';
import { contactsRoutes } from './contacts.routes';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    contactsRoutes,
  ],
  declarations: [ContactsComponent, ContactComponent]
})
export class ContactsModule {
}

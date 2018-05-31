import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { speakersRoutes } from './speakers.routes';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    speakersRoutes,
  ],
  declarations: [
    SpeakersComponent,
    ListComponent,
    ItemComponent
  ],
})
export class SpeakersModule {
}

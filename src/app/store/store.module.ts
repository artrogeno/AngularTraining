import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { HeaderModule, FooterModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgbDropdownModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }

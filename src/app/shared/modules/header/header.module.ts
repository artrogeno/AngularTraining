import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { CartService } from '../../services';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      NgbDropdownModule
    ],
    exports: [
      HeaderComponent,
      CommonModule
    ],
    declarations: [
      HeaderComponent
    ],
    // providers: [
    //   CartService
    // ]
})
export class HeaderModule { }

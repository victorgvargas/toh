import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisComponent } from './crisis-list/crisis.component';
import { RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';


@NgModule({
  declarations: [
    CrisisDetailComponent,
    CrisisComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }

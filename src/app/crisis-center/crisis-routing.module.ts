import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisComponent } from './crisis-list/crisis.component';

const routes: Routes = [
  { path: 'crisis-center', component: CrisisCenterComponent, children: [
    { path: '', component: CrisisComponent, children: [
      { path: ':id', component: CrisisDetailComponent },
      { path: '', component: CrisisCenterHomeComponent },
    ] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }

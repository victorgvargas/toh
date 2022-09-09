import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisModule } from './crisis-center/crisis.module';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [CrisisModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

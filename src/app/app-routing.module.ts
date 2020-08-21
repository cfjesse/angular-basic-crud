import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDetailsComponent } from './pages/master-details/master-details.component';
import { CreatePersonComponent } from './pages/create-person/create-person.component';
import { CreatingPersonGuard } from './guards/creating-person.guard';

const routes: Routes = [
  {
    path: '',
    component: MasterDetailsComponent,
  },
  {
    path: 'person/create',
    canDeactivate: [CreatingPersonGuard],
    component: CreatePersonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

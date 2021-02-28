import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: 'persons', component: PersonsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

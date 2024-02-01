import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { PraticaRxjsComponent } from './components/pratica-rxjs/pratica-rxjs.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';


const routes: Routes = [
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "rxjs",
    component: PraticaRxjsComponent
  },
  {
    path: "form/:id",
    component: FormComponent
  },
  {
    path: "list",
    component: ListComponent
  },
 


  {
    path: 'event/list-events',
    pathMatch: 'full',
    component: ListEventsComponent
  },


  {
    path: 'event/create-event',
    component: CreateEventComponent
  },

  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

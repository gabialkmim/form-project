import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { PraticaRxjsComponent } from './components/pratica-rxjs/pratica-rxjs.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    PraticaRxjsComponent,
    SideNavComponent,
    HeaderComponent,
    ListEventsComponent,
    CreateEventComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}




export interface EventDto {
  eveNrId: number;
  eveDtFim: Date;
  eveDtInicio: Date;
  eveNrPassagens: number;
  eveTxDescricao: string;
  eveTxNome: string;
  eveTxTipo: EventTypeEnum;
  estNrId: number;
  cidNrId: number;
  fedNrId: number;
  eveBlockCompetitions: BlockCompetitionDto[];
}

export interface BlockCompetitionDto {
  bloNrId: number;
  bloDtFim: Date;
  bloDtInicio: Date;
  bloDtFimInscricao: Date;
  bloDtInicioInscricao: Date;
  bloTxDescricao: string;
  bloTxNome: string;
  cidNrId: number;
  estNrId: number;
  fedNrId: number;
  bloTxLocalizacao: string;
}

export enum EventTypeEnum {
  ESTADUAL = 'ESTADUAL',
  NACIONAL = 'NACIONAL',
  INTERNACIONAL = 'INTERNACIONAL'
}
import { Component } from '@angular/core';
import { EventDto, EventTypeEnum } from 'src/app/models/dtos/event-dto';



@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  event: EventDto = {
    eveNrId: 1,
    eveDtFim: new Date(),
    eveDtInicio: new Date(),
    eveNrPassagens: 10,
    eveTxDescricao: 'Descrição do evento',
    eveTxNome: 'Nome do evento',
    eveTxTipo: EventTypeEnum.NACIONAL,
    estNrId: 2,
    cidNrId: 3,
    fedNrId: 4,
    eveBlockCompetitions: [
      {
        bloNrId: 101,
        bloDtFim: new Date(),
        bloDtInicio: new Date(),
        bloDtFimInscricao: new Date(),
        bloDtInicioInscricao: new Date(),
        bloTxDescricao: 'Descrição da competição',
        bloTxNome: 'Nome da competição',
        cidNrId: 5,
        estNrId: 6,
        fedNrId: 7,
        bloTxLocalizacao: 'Localização da competição'
      }
    ]
  };


}



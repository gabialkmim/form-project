// event-form.model.ts
import { BlockCompetitionForm } from "./block-competition-form"
export class EventForm {
  eveNrId: number = 0;
  eveDtFim: Date = new Date();
  eveDtInicio: Date = new Date();
  eveNrPassagens: number = 0;
  eveTxDescricao: string = '';
  eveTxNome: string = '';
  eveTxTipo: EventTypeEnum = EventTypeEnum.ESTADUAL;
  estNrId: number = 0;
  cidNrId: number = 0;
  fedNrId: number = 0;
  eveBlockCompetitions: BlockCompetitionForm[] = [];
}

export enum EventTypeEnum {
  ESTADUAL = 'ESTADUAL',
  NACIONAL = 'NACIONAL',
  INTERNACIONAL = 'INTERNACIONAL'
}

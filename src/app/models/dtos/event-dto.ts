import { BlockCompetitionDto } from "src/app/app.module";

// event-dto.ts
export interface EventDto {
  eveNrId: number;
  eveDtFim: Date;
  eveDtInicio: Date;
  eveNrPassagens: number;
  eveTxDescricao: string;
  eveTxNome: string;
  eveTxTipo: string; // Supondo que o tipo seja uma string, ajuste conforme necessário
  estNrId: number;
  cidNrId: number;
  fedNrId: number;
  eveBlockCompetitions: BlockCompetitionDto[]; // Adicionando a lista de competições
}


export enum EventTypeEnum {
  ESTADUAL = 'ESTADUAL',
  NACIONAL = 'NACIONAL',
  INTERNACIONAL = 'INTERNACIONAL'
}



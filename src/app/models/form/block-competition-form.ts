// block-competition-form.model.ts
export class BlockCompetitionForm {
  bloNrId: number = 0;
  bloDtFim: Date = new Date();
  bloDtInicio: Date = new Date();
  bloDtFimInscricao: Date = new Date();
  bloDtInicioInscricao: Date = new Date();
  bloTxDescricao: string = '';
  bloTxNome: string = '';
  cidNrId: number = 0;
  estNrId: number = 0;
  fedNrId: number = 0;
  bloTxLocalizacao: string = '';
}

import { ContactTypeEnum } from "src/app/enum/contact-type-enum";

export class ContactPostForm {
  public conNrId?: number;
  public conTxContato?: string;
  public conTxTipo?: ContactTypeEnum;
  public isPrincipal?: boolean;
}
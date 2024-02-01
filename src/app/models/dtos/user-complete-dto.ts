// user-complete-dto.ts
import { GenreEnum } from "src/app/enum/genre-enum";
import { AddressPostForm } from "../form/address-post-form";
import { ContactPostForm } from "../form/contact-post-form";


export interface UserCompleteDto {
usuTxEmail: any;
  id: number;
  usuTxNome?: string;
  usuTxSexo?: GenreEnum;
  usuDtNascimento?: Date;
  usuObjLogradouro: AddressPostForm;
  usuTxCpf: string;
  usuListContatos: ContactPostForm[];
  
  
}

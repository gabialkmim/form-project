import { AddressPostForm } from "src/app/models/form/address-post-form";
import { GenreEnum } from "src/app/enum/genre-enum";
import { ContactPostForm } from "./contact-post-form";
import { ContactTypeEnum } from "src/app/enum/contact-type-enum";

export class UserPostForm {
    id?: number;
    usuTxNome?: string;
    usuTxSexo?: GenreEnum;
    usuDtNascimento?: Date;
    usuObjLogradouro: AddressPostForm;
    usuTxCpf?: string;
    usuListContatos: ContactPostForm[];

    constructor() {
        this.usuObjLogradouro = new AddressPostForm();
        this.usuListContatos = [
            {conTxContato: undefined, conTxTipo: ContactTypeEnum.Email, isPrincipal: true},
            { conTxContato: undefined, conTxTipo: ContactTypeEnum.Telefone, isPrincipal: true }
            
        ];
        
        
    }
}


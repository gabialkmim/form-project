import { GenreEnum } from "src/app/enum/genre-enum";

export interface IUserDto {
    usuTxNome?: string;
    usuTxSexo?: GenreEnum;
    usuDtNascimento?: Date;
}
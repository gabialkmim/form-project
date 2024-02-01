import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ContactTypeEnum } from 'src/app/enum/contact-type-enum';
import { GenreEnum } from 'src/app/enum/genre-enum';
import { UserPostForm } from 'src/app/models/form/user-post-form';
import { ActivatedRoute } from '@angular/router';
import { ICountryDto } from 'src/app/models/dtos/countries-dto';
import { IStatesDto } from 'src/app/models/dtos/states-dto';
import { ICitiesDto } from 'src/app/models/dtos/cities-dto';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  public tipoContato = ContactTypeEnum;
  public tipoGenero = GenreEnum;
  public userPostForm: UserPostForm = new UserPostForm();
  public countries: ICountryDto[] = [];
  public states: IStatesDto[] = [];
  public cities: ICitiesDto[] = [];
  public isEditing: boolean = false;
  public message: string | null = null;
  public stateSubject: Subject<number> = new Subject<number>();
  public paisSubject: Subject<number> = new Subject<number>();

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.paisSubject.subscribe(paisId => {
      this.apiService.getAllStates(paisId).subscribe((states: IStatesDto[]) => this.states = states);
    });

    this.stateSubject.pipe(
      tap(() => console.log("Ative um loading")),
      switchMap(stateId => this.apiService.getAllCitiesByState(stateId))
    ).subscribe(cities => {
        this.cities = cities;
    });

    this.apiService.getAllCountries().subscribe((countries: ICountryDto[]) => this.countries = countries);

    this.activatedRoute.params.subscribe(param => {
      const id = param['id'];
      if (id) {
        this.isEditing = true;
        this.apiService.getUserById(id).subscribe({
          next: (response) => {
            console.log({response: response});
            
            const formEdit = new UserPostForm();
            formEdit.id = response.id;
            formEdit.usuTxNome = response.usuTxNome;
            formEdit.usuDtNascimento = response.usuDtNascimento;
            formEdit.usuListContatos = response.usuListContatos;
            formEdit.usuObjLogradouro = response.usuObjLogradouro;
            formEdit.usuTxCpf = response.usuTxCpf;
            formEdit.usuTxSexo = response.usuTxSexo;

            this.paisSubject.next(response.usuObjLogradouro.paiNrId!)
            this.stateSubject.next(response.usuObjLogradouro.estNrId!);
            
            console.log({form: formEdit});
            this.userPostForm = formEdit;
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });
  }

  onSubmit(form: NgForm): void {
    
  if (form.valid) {
    if (this.isEditing) {
      // Verifique se this.userPostForm.id é definido antes de chamar o método
      if (this.userPostForm.id !== undefined) {
        this.apiService.updateUser(this.userPostForm.id, this.userPostForm).subscribe(
          (response: any) => {
            this.message = 'Usuário atualizado com sucesso!';
            form.resetForm();
          },
          (error: any) => {
            this.message = 'Erro ao atualizar usuário: ' + error.message;
          }
        );
      } else {
        // Lide com o caso em que this.userPostForm.id é undefined (por exemplo, exiba uma mensagem de erro)
        console.error('ID do usuário não definido.');
        this.message = 'Erro: ID do usuário não definido.';
      }
    } else {
      this.apiService.register(this.userPostForm).subscribe(
        (response: any) => {
          this.message = 'Usuário cadastrado com sucesso!';
          form.resetForm();
        },
        (error: any) => {
          this.message = 'Erro ao cadastrar usuário: ' + error.message;
        }
      );
    }
  } else {
    this.message = 'Formulário inválido. Verifique os campos obrigatórios.';
  }
}

 changePais(event: Event): void {
    const paisId = (event.target as HTMLSelectElement).value;
    this.paisSubject.next(Number(paisId));

  }

  changeStates(event: Event): void {
    const stateId = (event.target as HTMLSelectElement).value;
    this.stateSubject.next(Number(stateId));
  }

  adicionarContato(): void {
    this.userPostForm.usuListContatos.push({
      conTxContato: '',
      conTxTipo: undefined
    });
  }

  removerContato(index: number): void {
    this.userPostForm.usuListContatos.splice(index, 1);
  }

  ngOnDestroy(): void {
    // enquanto o ngOnInit carrega tudo que tem dentro dele quando o componente é iniciado
    // esse ngOnDesatroy executa tudo que tiver aqui dentro no momento que o componente é destruido ou seja quando ele sai da tela
  }
}

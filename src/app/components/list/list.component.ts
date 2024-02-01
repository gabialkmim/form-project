// list.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserCompleteDto } from 'src/app/models/dtos/user-complete-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: UserCompleteDto[] = [];
  searchTerm: any;
  filteredUsers: UserCompleteDto[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiService.getAll().subscribe(
      (users: UserCompleteDto[]) => {
        console.log('Usuários recebidos:', users);
        this.users = users;
        this.filteredUsers = users;
      },
      (error: any) => {
        console.error('Erro ao obter a lista de usuários:', error);
      }
    );
  }

  navigateToCadastro(): void {
    this.router.navigate(['form']);
  }

  editUser(id: number): void {
    this.router.navigate(['form', id]);
  }

  deleteUser(id: number): void {
    this.apiService.deleteUserId(id).subscribe(
      () => {
        console.log('Usuário excluído com sucesso.');
        this.loadUsers();
      },
      (error: any) => {
        console.error('Erro ao excluir usuário:', error);
      }
    );
  }

  filterUsers() {
    if (this.searchTerm) {
      this.filteredUsers = this.users.filter(user =>
        user.usuTxNome && user.usuTxNome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

  navigateToUserList(): void {
    this.router.navigate(['user-list']); // Ou ajuste o caminho conforme necessário
  }

  // Adicione o método navigateToUserDetail
  navigateToUserDetail(userId: number): void {
    this.router.navigate(['user-detail', userId]);
  }
}

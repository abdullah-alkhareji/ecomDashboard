import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { createColumns } from './columns';
import { UsersService } from '../../services/users.service';
import { User, UserForm } from '../../../data/users';
import { AsyncPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { UsersTableComponent } from '../../components/users-table/users-table.component';
import { ModalComponent } from '../../components/ui/modal/modal.component';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    DataTableComponent,
    AsyncPipe,
    DatePipe,
    UsersTableComponent,
    ModalComponent,
    AddUserFormComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = this.usersService.users$;
  columns = createColumns();
  isModalOpen = false;

  constructor(private usersService: UsersService) {
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  editUser(user: User) {
    user;
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user.id);
  }

  addUser(user: UserForm) {
    this.usersService.addUser(user);
    this.isModalOpen = false;
  }

  onCloseModal() {
    this.isModalOpen = false;
  }

  onOpenModal() {
    this.isModalOpen = true;
  }
}

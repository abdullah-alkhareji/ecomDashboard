import { Component, Input } from '@angular/core';
import { User, UserForm } from '../../../data/users';
import { DatePipe } from '@angular/common';
import { ModalComponent } from '../ui/modal/modal.component';
import { UsersService } from '../../services/users.service';
import { EditUserFormComponent } from '../edit-user-form/edit-user-form.component';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [DatePipe, ModalComponent, EditUserFormComponent],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css',
})
export class UsersTableComponent {
  @Input() users: User[] | null = null;
  isEditModalOpen = false;
  selectedUser: User | null = null;

  constructor(private usersService: UsersService) {}

  onEditUser(event: { id: number; user: UserForm }) {
    this.usersService.updateUser(event.id, event.user);
    this.isEditModalOpen = false;
  }

  onDeleteUser(user: User) {
    this.usersService.deleteUser(user.id);
  }

  onCloseModal() {
    this.isEditModalOpen = false;
  }

  openEditModal(user: User) {
    this.selectedUser = user;
    this.isEditModalOpen = true;
  }
}

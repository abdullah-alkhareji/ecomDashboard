import { Component, Input } from '@angular/core';
import { User, UserForm } from '../../../data/users';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ModalComponent } from '../ui/modal/modal.component';
import { UsersService } from '../../services/users.service';
import { EditUserFormComponent } from '../edit-user-form/edit-user-form.component';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [DatePipe, ModalComponent, EditUserFormComponent, UpperCasePipe],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css',
})
export class UsersTableComponent {
  @Input() users: User[] | null = null;
  isEditModalOpen = false;
  selectedUser: User | null = null;
  isDeleteModalOpen = false;
  // Pagination properties
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  constructor(private usersService: UsersService) {}

  get paginatedUsers(): User[] | null {
    if (!this.users) return null;

    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

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

  openDeleteModal(user: User) {
    this.selectedUser = user;
    this.isDeleteModalOpen = true;
  }
}

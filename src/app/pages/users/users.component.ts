import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { createColumns } from './columns';
import { UsersService } from '../../services/users.service';
import { User } from '../../../data/users';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DataTableComponent, AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = this.usersService.users$;
  columns = createColumns();

  constructor(private usersService: UsersService) {
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  editUser(user: User) {
    console.log(user);
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user.id);
  }
}

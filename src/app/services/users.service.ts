import { Injectable, signal } from '@angular/core';
import { User, USERS } from '../../data/users';
import { toObservable } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users = signal<User[]>(USERS);
  users$ = toObservable(this._users);
  ordersService: any;

  getUsers() {
    return this._users();
  }

  getUser(id: number) {
    return this._users().find((user) => user.id === id);
  }

  createUser(user: User) {
    this._users.update((users) => [...users, user]);
  }

  updateUser(id: number, user: User) {
    this._users.update((users) => users.map((u) => (u.id === id ? user : u)));
  }

  deleteUser(id: number) {
    console.log(id);
    this._users.update((users) => users.filter((user) => user.id !== id));
  }

  getUserOrders(id: number) {
    return this.ordersService
      .getOrders()
      .filter((order: { userId: number }) => order.userId === id);
  }

  getUserName(id: number) {
    return this._users().find((user) => user.id === id)?.name;
  }

  getUserEmail(id: number) {
    return this._users().find((user) => user.id === id)?.email;
  }
}

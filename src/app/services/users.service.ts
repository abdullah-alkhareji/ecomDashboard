import { Injectable } from '@angular/core';
import { User, UserForm, USERS } from '../../data/users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users = new BehaviorSubject<User[]>(USERS);
  users$ = this._users.asObservable();

  getUsers() {
    return this._users.value;
  }

  getUser(id: number) {
    return this._users.value.find((user) => user.id === id);
  }

  addUser(user: UserForm) {
    const newUser = {
      ...user,
      id: this._users.value.length + 1,
      createdAt: new Date().toISOString(),
      lastLogin: null,
      isEmailVerified: false,
    };

    this._users.next([...this._users.value, newUser]);
  }

  updateUser(id: number, user: UserForm) {
    this._users.next(
      this._users.value.map((u) => (u.id === id ? { ...u, ...user } : u))
    );
  }

  deleteUser(id: number) {
    this._users.next(this._users.value.filter((user) => user.id !== id));
  }

  getUserName(id: number) {
    return this._users.value.find((user) => user.id === id)?.name;
  }

  getUserEmail(id: number) {
    return this._users.value.find((user) => user.id === id)?.email;
  }
}

import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  percorsoJson: string = 'assets/db.json';

  allUsers: User[] = [];

  constructor() {}

  getAllUsers(): Promise<User[]> {
    return fetch(this.percorsoJson).then((res) => res.json());
  }
}

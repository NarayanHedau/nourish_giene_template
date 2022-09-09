import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { UsersTable } from './users.table';
import { BookingsTable } from './bookings.table';

@Injectable({
  providedIn: 'root',
})
export class FakeAPIService implements InMemoryDbService {
  constructor() {}

  /**
   * Create Fake DB and API
   */
  createDb(): {} | Observable<{}> {
    const db = {
      // auth module
      users: UsersTable.users,
      bookings: BookingsTable.bookings,

    };
    return db;
  }
}

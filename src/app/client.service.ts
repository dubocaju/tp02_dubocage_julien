import { Injectable } from '@angular/core';
import {Client} from "./client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _client: Client;

  constructor() {
    this._client = new Client(
      'Jacques',
      'Boulon',
      'jboulon@gmail.com',
      'jboulon',
      '123456',
      '06 12 34 56 78',
      '11 rue des clarinettes',
      'Paris',
      '75000',
      'France',
      'Monsieur'
    )
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }
}

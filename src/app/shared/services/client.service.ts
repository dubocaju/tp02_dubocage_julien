import { Injectable } from '@angular/core';
import {Client} from "../entities/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _client: Client;

  constructor() {
    this._client = new Client();
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }
}

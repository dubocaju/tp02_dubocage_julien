import {Component} from '@angular/core';
import {Client} from "../shared/entities/client";
import {Router} from "@angular/router";
import {ClientService} from "../shared/services/client.service";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  model: Client;

  constructor(
    private router: Router,
    private clientService: ClientService
  ) {
    this.model = this.clientService.client
  }

  onSubmit() {
    this.clientService.client = this.model
    this.router.navigate(['/result']);
   }
}

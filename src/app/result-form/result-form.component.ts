import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Client} from "../shared/entities/client";
import {ClientService} from "../shared/services/client.service";

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent {
  model: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {
    this.model = this.clientService.client;
  }
}

import {Component} from '@angular/core';
import {Client} from "../client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  model = new Client(
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

  constructor(
    private router: Router
  ) {}

  onSubmit() {
    this.router.navigate(['/result'], {queryParams: {client: JSON.stringify(this.model)}}).then(r => console.log(r));
   }
}

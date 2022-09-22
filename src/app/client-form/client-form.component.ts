import {Component} from '@angular/core';
import {Client} from "../client";

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

  onSubmit() {
    console.log(this.model);
  }
}

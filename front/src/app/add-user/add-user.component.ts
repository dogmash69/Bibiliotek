import { Component } from '@angular/core';
import { Users, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

    user: Users = new Users("", "", "");

    constructor(
      private httpClientService: HttpClientService
    ) { }

    ngOnInit() {
    }

    createUser(): void {
      this.httpClientService.createUser(this.user)
          .subscribe( data => {
            alert("User created !");
          });

    };

}

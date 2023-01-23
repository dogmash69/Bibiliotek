import { Component, OnInit } from '@angular/core';
import { Users, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users: Users[] = [];

  constructor( private httpClientService:HttpClientService){}

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(response => {this.users = response;});
  }

  deleteUser(user: Users): void {
    if(confirm("Voulez-vous supprimer ce livre?")){
    this.httpClientService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
    }
  };


}

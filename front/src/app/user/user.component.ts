import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users: Users[] = [];

  @ViewChild('usersForm')
  form!: NgForm;

  pickedUser: Users[] = [];
  pickedUserId!: string;
  user: Users = new Users("","","");

  constructor( private httpClientService:HttpClientService){}

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(response => {this.users = response;});
    this.httpClientService.getUsers().subscribe((users)=> {this.pickedUser = users})
  }

  deleteUser(user: Users): void {
    if(confirm(`Voulez-vous supprimer l'utilisateur ${user.name}?`)){
    this.httpClientService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
    }
  };

  editButton(id: string){
    this.pickedUserId = id;
    let currentUser = this.pickedUser.find((b) => {return b.id === id});
    console.log(currentUser);
    this.form?.setValue({
      "id": currentUser?.id,
      "name": currentUser?.name,
      "birthday": currentUser?.birthday
    })
  }

  updateUser(id: string, value: Users): void {
    this.httpClientService.updateUser(this.user.id, this.user)
        .subscribe( data => { 
          alert("User updated !");
          window.location.reload();
        });

  };


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Books{
  constructor(
    public id:string,
    public title:string,
    public author:string,
    public genre:string,
    public description:string,
    public cover:string,
    public users:string
  ) {}
}

export class Users{
  constructor(
    public id:string,
    public name:string,
    public birthday:string,
  ) {}
}

let username='admin'
let password='password'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
  }

  getBooks(){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
       return this.httpClient.get<Books[]>('http://localhost:8080/books',{headers});
  }

  getBook(id: string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
       return this.httpClient.get<Books[]>('http://localhost:8080/books'+'/'+id,{headers});
  }

  public deleteBook(book: any) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Books>("http://localhost:8080/books" + "/"+ book.id,{headers});
  }

  public createBook(book: any) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Books>("http://localhost:8080/books", book,{headers});
  }

  public updateBook(id: string, book: Books) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.put<Users>("http://localhost:8080/books/"+id, book,{headers});
  }

  public getUsers(){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
       return this.httpClient.get<Users[]>('http://localhost:8080/users',{headers});
  }

  public deleteUser(user: any) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Users>("http://localhost:8080/users" + "/"+ user.id,{headers});
  }

  public createUser(user: any) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Users>("http://localhost:8080/users", user,{headers});
  }


}

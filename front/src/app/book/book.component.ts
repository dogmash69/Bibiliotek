import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books, HttpClientService, Users } from '../service/http-client.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  books: Books[] = [];

  users: Users[] = [];

  @ViewChild('booksForm')
  form!: NgForm;
 
  displayEdit: boolean = false;
  pickedBook: Books[] = [];
  pickedBookId!: string;
  book: Books = new Books("","","","","");
  
  constructor( private httpClientService:HttpClientService){}

  ngOnInit(): void {
    this.httpClientService.getBooks().subscribe(response => {this.books = response;});
    this.httpClientService.getUsers().subscribe(response => {this.users = response;});
    this.httpClientService.getBooks().subscribe((books)=> {this.pickedBook = books})
  }

  deleteBook(book: Books): void {
    this.httpClientService.deleteBook(book)
      .subscribe( data => {
        this.books = this.books.filter(u => u !== book);
      })
  };

  editButton(id: string){
    this.displayEdit = !this.displayEdit;
    this.pickedBookId = id;
    let currentBook = this.pickedBook.find((b) => {return b.id === id});
    console.log(currentBook);
    this.form?.setValue({
      "id": currentBook?.id,
      "title": currentBook?.title,
      "author": currentBook?.author,
      "genre": currentBook?.genre,
      "users": currentBook?.users
    })
  }

  updateBook(id: string, value: Books): void {
    this.httpClientService.updateBook(this.book.id, this.book)
        .subscribe( data => { 
          alert("Book updated !");
          window.location.reload();
        });

  };

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books, HttpClientService, Users } from '../service/http-client.service';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit{

  book: any = {};

  data: string = "";
  constructor(private router : ActivatedRoute, private httpClientService:HttpClientService){}

  ngOnInit(): void {
    this.data = this.router.snapshot.params['id'];
    this.httpClientService.getBook(this.data).subscribe(response => {this.book = response;});
    console.log(this.book)

  }

}

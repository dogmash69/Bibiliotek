import { Component } from '@angular/core';
import { Books, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  
      book: Books = new Books("","","","","");

      constructor(
        private httpClientService: HttpClientService
      ) { }

      ngOnInit() {
      }

      createBook(): void {
        this.httpClientService.createBook(this.book)
            .subscribe( data => {
              alert("Book created !");
            });

      };

}

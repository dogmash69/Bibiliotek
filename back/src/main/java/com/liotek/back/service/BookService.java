package com.liotek.back.service;

import com.liotek.back.model.Books;
import com.liotek.back.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;
     public List<Books> getBooks(){
         List<Books> books = new ArrayList<>();
         bookRepository.findAll().forEach(book -> {
             books.add(book);
         });
         return books;
     }

     public Books getBook(long id){
         return bookRepository.findById(id).orElse(null);
     }

    public void deleteBook(long id) {
         bookRepository.deleteById(id);
    }

    public void addBook(Books book) {
         bookRepository.save(book);
    }

    public void updateBook(Books book, long id) {
        bookRepository.save(book);
    }
}

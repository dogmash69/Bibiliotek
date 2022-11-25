package com.liotek.back.controller;

import com.liotek.back.model.Books;
import com.liotek.back.model.Users;
import com.liotek.back.repository.BookRepository;
import com.liotek.back.repository.UserRepository;
import com.liotek.back.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/books")
    public List<Books> getBooks(){
        return bookService.getBooks();
    };

    @RequestMapping("/books/{id}")
    public Books getBook(@PathVariable long id){
        return bookService.getBook(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public void deleteBook(@PathVariable long id){
        bookService.deleteBook(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public void addBook(@RequestBody Books book){
        bookService.addBook(book);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/books/{id}")
    public void updateBook(@RequestBody Books book,@PathVariable long id){
        bookService.updateBook(book, id);
    }

}

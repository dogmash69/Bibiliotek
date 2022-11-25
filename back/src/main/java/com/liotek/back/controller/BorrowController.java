package com.liotek.back.controller;

import com.liotek.back.model.Borrow;
import com.liotek.back.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BorrowController {

    @Autowired
    private BorrowService borrowService;

    @RequestMapping("/borrows")
    public List<Borrow> getBorrows(){
        return borrowService.getBorrows();
    };

    @RequestMapping("/borrows/{id}")
    public Borrow getBorrow(@PathVariable long id){
        return borrowService.getBorrow(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/borrows/{id}")
    public void deleteBorrow(@PathVariable long id){
        borrowService.deleteBorrow(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/borrows")
    public void addBorrow(@RequestBody Borrow borrow){
        borrowService.addBorrow(borrow);
    }
}

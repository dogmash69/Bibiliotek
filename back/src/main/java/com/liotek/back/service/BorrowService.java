package com.liotek.back.service;

import com.liotek.back.model.Books;
import com.liotek.back.model.Borrow;
import com.liotek.back.repository.BookRepository;
import com.liotek.back.repository.BorrowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BorrowService {
    @Autowired
    private BorrowRepository borrowRepository;

    public List<Borrow> getBorrows(){
        List<Borrow> borrows = new ArrayList<>();
        borrowRepository.findAll().forEach(borrow -> {
            borrows.add(borrow);
        });
        return borrows;
    }

    public Borrow getBorrow(long id){
        return borrowRepository.findById(id).orElse(null);
    }

    public void deleteBorrow(long id) {
        borrowRepository.deleteById(id);
    }

    public void addBorrow(Borrow borrow) {
        borrowRepository.save(borrow);
    }

}

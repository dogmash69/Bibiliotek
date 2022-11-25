package com.liotek.back.repository;

import com.liotek.back.model.Borrow;
import org.springframework.data.repository.CrudRepository;

public interface BorrowRepository extends CrudRepository<Borrow, Long> {
}

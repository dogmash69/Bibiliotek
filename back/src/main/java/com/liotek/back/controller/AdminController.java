package com.liotek.back.controller;

import com.liotek.back.model.Admin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {
    @GetMapping(produces = "application/json")
    @RequestMapping({ "/books/validateLogin" })
    public Admin validateLogin() {
        return new Admin("Admin successfully authenticated");
    }
}

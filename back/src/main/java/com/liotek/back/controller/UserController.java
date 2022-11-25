package com.liotek.back.controller;

import com.liotek.back.model.Users;
import com.liotek.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    public List<Users> getUsers(){
        return userService.getUsers();
    };

    @RequestMapping("/users/{id}")
    public Users getUser(@PathVariable long id){
        return userService.getUser(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/users/{id}")
    public void deleteUser(@PathVariable long id){
        userService.deleteUser(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public void addUser(@RequestBody Users user){
        userService.addUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/users/{id}")
    public void updateUser(@RequestBody Users user, @PathVariable long id){
        userService.updateUser(user, id);
    }
}

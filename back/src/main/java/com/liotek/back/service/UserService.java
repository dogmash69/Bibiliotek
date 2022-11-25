package com.liotek.back.service;

import com.liotek.back.model.Users;
import com.liotek.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<Users> getUsers(){
        List<Users> users = new ArrayList<>();
        userRepository.findAll().forEach(user -> {
            users.add(user);
        });
        return users;
    }

    public Users getUser(long id){
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    public void addUser(Users user) {userRepository.save(user);
    }

    public void updateUser(Users user, long id) {
        userRepository.save(user);
    }
}

package com.example.portfolio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

public class PortfolioController {

    @GetMapping("/api/about")
    public AboutData getAbout() {
        return new AboutData("Avantika", "Full Stack Developer", "Passionate about creating amazing web experiences");
    }
}

class AboutData {
    public String name;
    public String title; 
    public String bio;
    
    public AboutData(String name, String title, String bio) {
        this.name = name;
        this.title = title;
        this.bio = bio;
    }
}

    


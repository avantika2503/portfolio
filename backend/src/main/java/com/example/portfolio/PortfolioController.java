package com.example.portfolio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import java.util.Arrays;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PortfolioController {

    @GetMapping("/api/about")
    public AboutData getAbout() {
        return new AboutData("Avantika", "Full Stack Java Developer",
                "Passionate about creating amazing web experiences");
    }

    @GetMapping("/api/projects")
    public List<Project> getProjects() {
        return Arrays.asList(
            new Project(
                "Portfolio Website", 
                "Full-stack portfolio showcasing React frontend with Spring Boot REST API backend",
                "React, Java, Spring Boot, CSS3, REST API",
                "https://github.com/avantika2503/portfolio",
                "http://localhost:5173"
            ),
            new Project(
                "Product Inventory Management System", 
                "Java-based enterprise application with GUI for comprehensive inventory management and supplier tracking",
                "Java, MySQL, Swing/JavaFX, CRUD Operations",
                "https://github.com/avantika2503/inventory-management",
                "#"
            ),
            new Project(
                "Sentiment Analysis Model", 
                "Research-oriented machine learning model for movie reviews using DistilBERT, achieving 94.15% accuracy",
                "Python, DistilBERT, NLP, Machine Learning",
                "https://github.com/avantika2503/project",
                "#"
            )
        );
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

class Project {
    public String name;
    public String description;
    public String techStack;
    public String githubUrl;
    public String liveUrl;

    public Project(String name, String description, String techStack, String githubUrl, String liveUrl) {
        this.name = name;
        this.description = description;
        this.techStack = techStack;
        this.githubUrl = githubUrl;
        this.liveUrl = liveUrl;
    }
}

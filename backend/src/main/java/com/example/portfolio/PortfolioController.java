package com.example.portfolio;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
import java.nio.file.*;
import java.io.IOException;
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
                        "http://localhost:5173"),
                new Project(
                        "Product Inventory Management System",
                        "Java-based enterprise application with GUI for comprehensive inventory management and supplier tracking",
                        "Java, MySQL, Swing/JavaFX, CRUD Operations",
                        "https://github.com/avantika2503/inventory-management",
                        "#"),
                new Project(
                        "Sentiment Analysis Model",
                        "Research-oriented machine learning model for movie reviews using DistilBERT, achieving 94.15% accuracy",
                        "Python, DistilBERT, NLP, Machine Learning",
                        "https://github.com/avantika2503/project",
                        "#"));
    }

    @GetMapping("/api/skills")
    public List<SkillCategory> getSkills() {
        return Arrays.asList(
                new SkillCategory("Languages", Arrays.asList("Java", "JavaScript", "Python", "HTML", "CSS")),
                new SkillCategory("Frameworks",
                        Arrays.asList("Spring Boot", "React.js", "Django", "Node.js", "Express.js")),
                new SkillCategory("Databases", Arrays.asList("MySQL", "MongoDB")),
                new SkillCategory("Tools", Arrays.asList("Git/GitHub", "Postman", "VSCode", "SonarQube", "ESLint")),
                new SkillCategory("AI Tools", Arrays.asList("GitHub Copilot", "Windsurf AI", "DistilBERT")));
    }

    // ✅ NOW INSIDE THE CLASS!
    @PostMapping("/api/upload-resume")
    public ResponseEntity<String> uploadResume(@RequestParam("file") MultipartFile file) {
        try {
            String fileName = "resume_" + System.currentTimeMillis() + ".pdf";
            Path uploadPath = Paths.get("uploads/");

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Files.copy(file.getInputStream(), uploadPath.resolve(fileName),
                    StandardCopyOption.REPLACE_EXISTING);

            return ResponseEntity.ok("Resume uploaded successfully: " + fileName);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Upload failed: " + e.getMessage());
        }
    }

    @GetMapping("/api/download-resume")
    public ResponseEntity<Resource> downloadResume() {
        try {
            Path resumePath = Paths.get("uploads/AvantikaYadav_Resume.pdf");
            Resource resource = new UrlResource(resumePath.toUri());

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=AvantikaYadav_Resume.pdf")
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Classes at the bottom
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

    class SkillCategory {
        public String category;
        public List<String> skills;
        
        public SkillCategory(String category, List<String> skills) {
            this.category = category;
            this.skills = skills;
        }
    }
}

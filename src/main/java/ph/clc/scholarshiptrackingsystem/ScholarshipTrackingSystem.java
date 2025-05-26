package ph.clc.scholarshiptrackingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Spring Boot Application Class
 * Scholarship Tracking System - Capstone Demo Version
 * 
 * @author Capstone Team
 * @version 1.0
 */
@SpringBootApplication
public class ScholarshipTrackingSystem {

    public static void main(String[] args) {
        SpringApplication.run(ScholarshipTrackingSystem.class, args);
        System.out.println("🎓 Scholarship Tracking System Started Successfully!");
        System.out.println("📱 Access the application at: http://localhost:8080");
        System.out.println("🔑 Demo Credentials - Username: admin, Password: admin123");
    }
}

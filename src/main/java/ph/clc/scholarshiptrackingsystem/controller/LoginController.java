package ph.clc.scholarshiptrackingsystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

/**
 * Login Controller
 * Handles authentication and login-related operations
 * 
 * Demo Version - Uses hardcoded credentials for presentation
 */
@Controller
public class LoginController {

    // TODO: Replace with actual authentication service
    // Hardcoded credentials for demo purposes
    private static final String DEMO_USERNAME = "admin";
    private static final String DEMO_PASSWORD = "admin123";

    /**
     * Display login page
     */
    @GetMapping("/login")
    public String loginPage(Model model, @RequestParam(value = "error", required = false) String error) {
        if (error != null) {
            model.addAttribute("error", "Invalid username or password. Please try again.");
        }
        return "login";
    }

    /**
     * Process login form submission
     */
    @PostMapping("/login")
    public String processLogin(@RequestParam String username, 
                             @RequestParam String password, 
                             HttpSession session, 
                             Model model) {
        
        // TODO: Implement actual authentication logic with database
        // Current implementation uses hardcoded credentials for demo
        
        if (DEMO_USERNAME.equals(username) && DEMO_PASSWORD.equals(password)) {
            // Successful login
            session.setAttribute("loggedIn", true);
            session.setAttribute("username", username);
            return "redirect:/";
        } else {
            // Failed login
            model.addAttribute("error", "Invalid username or password. Please try again.");
            return "login";
        }
    }

    /**
     * Display password recovery page
     */
    @GetMapping("/recover")
    public String recoverPage() {
        return "recover";
    }

    /**
     * Process password recovery form
     */
    @PostMapping("/recover")
    public String processRecover(@RequestParam String email, Model model) {
        // TODO: Implement actual password recovery logic
        // This would typically send an email with reset instructions
        
        model.addAttribute("success", true);
        model.addAttribute("email", email);
        return "recover";
    }

    /**
     * Logout functionality
     */
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login";
    }
}

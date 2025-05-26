package ph.clc.scholarshiptrackingsystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Home Controller
 * Handles main dashboard and home page operations
 * 
 * Demo Version - Uses hardcoded data for presentation
 */
@Controller
public class HomeController {

    /**
     * Display main dashboard/homepage
     */
    @GetMapping("/")
    public String home(HttpSession session, Model model) {
        // Check if user is logged in
        Boolean loggedIn = (Boolean) session.getAttribute("loggedIn");
        if (loggedIn == null || !loggedIn) {
            return "redirect:/login";
        }

        String username = (String) session.getAttribute("username");
        model.addAttribute("username", username != null ? username : "Student");

        // TODO: Replace with actual data from database
        // Hardcoded notifications for demo purposes
        List<Map<String, String>> notifications = getDemoNotifications();
        model.addAttribute("notifications", notifications);

        // TODO: Replace with actual statistics from database
        // Hardcoded statistics for demo
        Map<String, Object> stats = getDemoStatistics();
        model.addAttribute("stats", stats);

        return "index";
    }

    /**
     * Get demo notifications for presentation
     * TODO: Replace with actual database queries
     */
    private List<Map<String, String>> getDemoNotifications() {
        List<Map<String, String>> notifications = new ArrayList<>();
        
        Map<String, String> notification1 = new HashMap<>();
        notification1.put("title", "Scholarship A deadline approaching");
        notification1.put("message", "Application deadline: May 30, 2024");
        notification1.put("type", "warning");
        notification1.put("date", "2024-05-26");
        notifications.add(notification1);

        Map<String, String> notification2 = new HashMap<>();
        notification2.put("title", "Renewal approved");
        notification2.put("message", "Your scholarship renewal has been approved for the next semester");
        notification2.put("type", "success");
        notification2.put("date", "2024-05-25");
        notifications.add(notification2);

        Map<String, String> notification3 = new HashMap<>();
        notification3.put("title", "New opportunity posted");
        notification3.put("message", "Merit-based scholarship now available for STEM students");
        notification3.put("type", "info");
        notification3.put("date", "2024-05-24");
        notifications.add(notification3);

        Map<String, String> notification4 = new HashMap<>();
        notification4.put("title", "Document submission required");
        notification4.put("message", "Please submit your latest transcript for verification");
        notification4.put("type", "warning");
        notification4.put("date", "2024-05-23");
        notifications.add(notification4);

        return notifications;
    }

    /**
     * Get demo statistics for presentation
     * TODO: Replace with actual database queries
     */
    private Map<String, Object> getDemoStatistics() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("activeApplications", 3);
        stats.put("approvedScholarships", 2);
        stats.put("pendingReviews", 1);
        stats.put("totalAmount", "₱45,000");
        return stats;
    }
}

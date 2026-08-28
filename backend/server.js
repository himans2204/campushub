const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "CampusHub backend is running 🚀"
  });
});
// Assignments data
let assignments = [
    {
        id: 1,
        title: "Data Structures Lab",
        subject: "Data Structures",
        due: "Tomorrow",
        priority: "High",
        completed: false
    },
    {
        id: 2,
        title: "SQL Database Project",
        subject: "Database Systems",
        due: "Friday",
        priority: "Medium",
        completed: false
    },
    {
        id: 3,
        title: "Operating Systems Report",
        subject: "Operating Systems",
        due: "Next Week",
        priority: "Low",
        completed: false
    }
];

// GET all assignments
// Get all assignments
app.get("/api/assignments", (req, res) => {
  res.json(assignments);
});

// Mark assignment as completed
app.patch("/api/assignments/:id", (req, res) => {
    const id = Number(req.params.id);

    const assignment = assignments.find(item => item.id === id);

    if (!assignment) {
        return res.status(404).json({
            message: "Assignment not found"
        });
    }

    assignment.completed = true;

    res.json({
        message: "Assignment completed",
        assignment: assignment
    });
});
// Start server
const server = app.listen(PORT, () => {
  console.log(`CampusHub backend running at http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});

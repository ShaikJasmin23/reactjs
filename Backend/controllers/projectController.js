
const Project = require("../models/Project");


exports.createProject = async (req, res) => {
    try {
        const { title, description, goalAmount } = req.body;
        const project = new Project({ title, description, goalAmount, owner: req.user.id });

        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate("owner", "name email");
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

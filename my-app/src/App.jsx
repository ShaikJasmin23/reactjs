import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Campaign from "./Campaign";
import About from "./About";
import Contact from "./Contact";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import DonationPage from "./DonationPage";
import AdminDashboard from "./AdminDashboard";
import AddCampaign from "./AddCampaign"; // ✅ Import AddCampaign

// Reusable Button Component
const Button = ({ children, className, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Crowdfunding</h2>
        <div className="nav-links">
          <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
          <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
          <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
          <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Support Our Cause</h1>
        <p className="hero-text">
          Your donation helps us make a difference in the community. Join us in making a change.
        </p>
        <div className="hero-buttons">
          <Button className="donate-button" onClick={() => navigate("/campaign")}>View Campaigns</Button>
          <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>Create Campaign</Button>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Crowdfunding Platform. All rights reserved.</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/donate/:id" element={<DonationPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-campaign" element={<AddCampaign />} /> {/* ✅ Added AddCampaign Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

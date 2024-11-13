import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CelebrationsPage from "./pages/CelebrationsPage"
import CompetitionsPage from "./pages/CompetitionsPage"
import ContactPage from "./pages/ContactPage"
import DonatePage from "./pages/DonatePage"
import HomePage from "./pages/HomePage"
import JoinUsPage from "./pages/JoinUsPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import OtherEventsPage from "./pages/OtherEventsPage"
import OurTeamPage from "./pages/OurTeamPage"
import OutreachPage from "./pages/OutreachPage"
import PaathshalaPage from "./pages/PaathshalaPage"
import PastTeams from "./pages/PastTeams"
import SchoolOutreachPage from "./pages/SchoolOutreachPage"
import Kviitroparpage from "./pages/kviitroparpage"
import Event from "./pages/Event";
import AchievementPage from "./pages/AchievementPage";


import Dashboard from "./pages/dashboard/Dashboard";
import ManageEventsPage from "./pages/dashboard/ManageEventsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import GetAttPage from "./pages/dashboard/GetAttPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/celebrations" element={<CelebrationsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/joinus" element={<JoinUsPage />} />
        <Route path="/ourteam" element={<OurTeamPage />} />
        <Route path="/outreach" element={<OutreachPage />} />
        <Route path="/paathshala" element={<PaathshalaPage />} />
        <Route path="/schooloutreach" element={<SchoolOutreachPage />} />
        <Route path="/kviitropar" element={<Kviitroparpage />} />
        <Route path="/otherevents" element={<OtherEventsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pastteams" element={<PastTeams />} />
        <Route path='/event/:eventid' element={<Event />} />
        <Route path='/achievement' element={<AchievementPage />} />
        
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/profile' element={<ProfilePage />} />
        <Route path="/dashboard/events" element={<ManageEventsPage />} />
        <Route path="/dashboard/get-attendance" element={<GetAttPage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/aboutus" element={<HomePage />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

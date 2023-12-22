import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FooterPES from "./components/Footer";

import CelebrationsPage from "./pages/CelebrationsPage"
import CompetitionsPage from "./pages/CompetitionsPage"
import ContactPage from "./pages/ContactPage"
import DonatePage from "./pages/DonatePage"
import HomePage from "./pages/HomePage"
import JoinUsPage from "./pages/JoinUsPage"
import KV_IITRopar_Page from "./pages/KV_IITRopar_Page"
import LoginPage from "./pages/LoginPage"
import OtherEventsPage from "./pages/OtherEventsPage"
import OurTeamPage from "./pages/OurTeamPage"
import OutreachPage from "./pages/OutreachPage"
import PaathshalaPage from "./pages/PaathshalaPage"
import PastTeams from './pages/PastTeams'
import SchoolOutreachPage from "./pages/SchoolOutreachPage"
import kviitroparpage from "./pages/kviitroparpage"

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
        <Route path="/kviitropar" element={<KV_IITRopar_Page />} />
        <Route path="/otherevents" element={<OtherEventsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pastteams" element={<PastTeams />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

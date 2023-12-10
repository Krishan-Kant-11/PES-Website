import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom"


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
import SchoolOutreachPage from "./pages/SchoolOutreachPage"
import PastTeams from './pages/PastTeams.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <App />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "celebrations",
    element: <CelebrationsPage />,
  },
  {
    path: "donate",
    element: <DonatePage />,
  },
  {
    path: "competitions",
    element: <CompetitionsPage />,
  },
  {
    path: "joinus",
    element: <JoinUsPage />,
  },
  {
    path: "ourteam",
    element: <OurTeamPage />,
  },
  {
    path: "outreach",
    element: <OutreachPage />,
  },
  {
    path: "paathshala",
    element: <PaathshalaPage />,
  },
  {
    path: "schooloutreach",
    element: <SchoolOutreachPage />,
  },
  {
    path: "kviitropar",
    element: <KV_IITRopar_Page />,
  },
  {
    path: "otherevents",
    element: <OtherEventsPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "pastteams",
    element: <PastTeams />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

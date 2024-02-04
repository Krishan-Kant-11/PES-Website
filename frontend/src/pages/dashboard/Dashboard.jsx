import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AdminDashboard from './AdminDashboard';
import request from "../../request";
import "../../styles/pagesStyles/dashboard/Dashboard.css";

import { API_BASE } from "../../../constants";

function Dashboard(){
  const [user, setUser] = useState(undefined); // user object

  async function initialize(){
    setUser(undefined);
    // get user details
    let _user = await (await request.get(`${API_BASE}/auth/user`)).json();
    setUser(_user);
  }
  
  useEffect(()=>{
    initialize();
  }, []);

  if(user == undefined)
    return (
      <>
      <div className="navgap"></div>
      <h1>Loading...</h1>
      </>
    )
  else if(user.privileges == "admin")
    return (<AdminDashboard user={user}/>);
  else
    return (<Navigate to={'/dashboard/profile'}/>);
}

export default Dashboard;
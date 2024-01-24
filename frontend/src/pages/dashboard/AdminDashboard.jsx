import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import request from '../../request';
import "../../styles/pagesStyles/dashboard/Dashboard.css";

function PendingRequest({ pendingRequest, reload }){
  const [viewDetails, setViewDetails] = useState(false);
  const rejectButton = useRef(null);
  const approveButton = useRef(null);

  function onClick(e, buttonRef){
    e.stopPropagation();
    buttonRef.current.innerHTML = `
    <svg style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke="#ff6600" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    </circle>
    </svg>
    `
    const oppRef = rejectButton === buttonRef ? approveButton : rejectButton;
    oppRef.current.disabled = true;
  }
  function approve(e){
    onClick(e, approveButton);
    request.post(`${import.meta.env.VITE_API_BASE}/auth/approve_request`, new URLSearchParams({id: pendingRequest._id})).then(res => {
      if(res.status === 200){
        alert("Request approved!");
        reload();
      }else{
        alert("Something went wrong! Please try again later.");
      }
    }).catch(err => {
      console.log(err);
      alert("Something went wrong! Please check your internet connection.");
    });
  }
  function reject(e){
    onClick(e, rejectButton);
    request.post(`${import.meta.env.VITE_API_BASE}/auth/reject_request`, new URLSearchParams({id: pendingRequest._id})).then(res => {
      if(res.status === 200){
        alert("Request rejected!");
        reload();
      }else{
        alert("Something went wrong! Please try again later.");
      }
    }).catch(err => {
      console.log(err);
      alert("Something went wrong! Please check your internet connection.");
    });
  }
  return (
    <div className="item">
      <div className="title" onClick={()=>setViewDetails(!viewDetails)} >
        <img src={pendingRequest.photo} alt="User Photo" />
        <p>{pendingRequest.name}</p>
        <span></span>
        <button onClick={approve} className="approve" ref={approveButton} title="Approve Request"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"/></svg></button>
        <button onClick={reject} className="reject" ref={rejectButton} title="Reject Request"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg></button>
      </div>
      {viewDetails ? 
      (<div className="details">
        <p>Email: {pendingRequest.email}</p>
        <p>Branch: {pendingRequest.branch}</p>
        <p>Team: {pendingRequest.team}</p>
      </div>
      )
      : null}
    </div>
  );
}


function User({ user, reload, myUser }){
  const [viewDetails, setViewDetails] = useState(false);
  const togglePrivilegeButton = useRef(null);

  function onClick(e){
    e.stopPropagation();
    togglePrivilegeButton.current.disabled = true;
    togglePrivilegeButton.current.innerHTML = `
    <svg style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke="#ff6600" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    </circle>
    </svg>
    `
  }
  function togglePrivilege(e){
    if(!user) return;
    onClick(e);
    // console.log(user);
    request.post(`${import.meta.env.VITE_API_BASE}/auth/${user.privileges == "volunteer" ? 'promote' : 'demote'}`, new URLSearchParams({id: user._id})).then(res => {
      if(res.status === 200){
        alert("User's admin status changed!");
        reload();
      }else if(res.status === 400){
        alert("Cannot change your own admin status!");
        reload();
      }else{
        alert("Something went wrong! Please try again later.");
      }
    }).catch(err => {
      console.log(err);
      alert("Something went wrong! Please check your internet connection.");
    });
  }

  let icon = (<svg width="24" height="24" viewBox="0 0 24 24"><path d="M5.496 1.261l3.77 3.771c.409 1.889-2.33 4.66-4.242 4.242l-3.77-3.771c-.172.585-.254 1.189-.254 1.793 0 1.602.603 3.202 1.826 4.426 1.351 1.351 3.164 1.957 4.931 1.821.933-.072 1.852.269 2.514.931l7.621 7.611c.577.578 1.337.915 2.096.915 1.661 0 3.047-1.411 3.012-3.077-.016-.737-.352-1.47-.914-2.033l-7.621-7.612c-.662-.661-1.002-1.581-.931-2.514.137-1.767-.471-3.58-1.82-4.93-1.225-1.224-2.825-1.834-4.427-1.834-.603 0-1.207.09-1.791.261zm15.459 18.692c0 .553-.447 1-1 1-.553 0-1-.448-1-1s.447-1 1-1 1 .447 1 1z"/></svg>);
  console.log(user._id == myUser._id);
  return (
    <div className="item">
      <div className="title" onClick={()=>setViewDetails(!viewDetails)} >
        <img src={user.photo} alt="User Photo" className={user.privileges == "admin" ? "glow" : ""} />
        <p>{user.name}</p>
        <span></span>
        {user.privileges == "admin" ? 
          <button onClick={togglePrivilege} className="togglePrivilege" ref={togglePrivilegeButton} title="Make user Volunteer">{icon}</button>
         : <button onClick={togglePrivilege} className="togglePrivilege" ref={togglePrivilegeButton} title="Make user Admin">{icon}</button>}
        
      </div>
      {viewDetails ? 
      (<div className="details">
        <p>Email: {user.email}</p>
        {/* <p>Branch: {user.branch}</p> */}
        <p>Team: {user.team}</p>
      </div>
      )
      : null}
    </div>
  );
}


function Dashboard(){
  const [user, setUser] = useState(undefined); // user object
  const [pendingRequests, setPendingRequests] = useState(undefined); // pending requests array
  const [allUsers, setAllUsers] = useState(undefined); // all users array

  async function initialize(){
    setUser(undefined);
    setPendingRequests(undefined);
    setAllUsers(undefined);
    // get user details
    let _user = await (await request.get(`${import.meta.env.VITE_API_BASE}/auth/user`)).json();
    setUser(_user);
    // get all users
    let _allUsers = await (await request.get(`${import.meta.env.VITE_API_BASE}/auth/users`)).json();
    // sort all users, keeping admins on top and volunteers at bottom
    _allUsers.sort((a, b) => {
      if(a.privileges == "admin" && b.privileges == "volunteer") return -1;
      if(a.privileges == "volunteer" && b.privileges == "admin") return 1;
      return a.name.localeCompare(b.name);
    });
    setAllUsers(_allUsers);
    // get pending requests
    let _pendingRequests = await (await request.get(`${import.meta.env.VITE_API_BASE}/auth/pending_requests`)).json();
    setPendingRequests(_pendingRequests);
  }

  useEffect(() => {
    initialize();
  }, []);

  if([user, allUsers, pendingRequests].includes(undefined)) return (
    <>
    <div className="navgap"></div>
    <h1>Loading...</h1>
    </>
  )

  return (
    <>
      <div className="navgap"></div>
      <div className="dashboard">
        <div className="topPanel">
          <h1>Welcome {user.name}</h1>
          <div>
            <Link to="/dashboard/events">Manage events</Link>
            <Link to="/dashboard/profile">My Profile</Link>
            <Link to="/dashboard/get-attendance">Get Attendance</Link>
          </div>
        </div>


        <div className="bottomPanel">
          <h2>Pending Volunteer Requests</h2>
          {pendingRequests.length == 0 ? <p>No pending requests</p> : null}
          <div className="items">
            {pendingRequests.map((pendingRequest, index) => {
              return <PendingRequest pendingRequest={pendingRequest} key={index} reload={initialize} />
            })}
          </div>
        </div>


        <div className="sidePanel">
          <h2>All Users</h2>
          <div className="items">
            {allUsers.map((_user, index) => {
              return <User user={_user} key={index} reload={initialize} myUser={user}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
import React, { useState, useEffect } from 'react';

import "../styles/pagesStyles/ProfilePage.css";

import profile_image from '../assets/sample-image.jpg';
import request from '../request';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null); 
  
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("#000");
  const [loading, setLoading] = useState(false);

  const [edit, setEdit] = useState(false);

  const [profileImg, setProfileImg] = useState(profile_image);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);    
      request.get(`${import.meta.env.VITE_API_BASE}/profile/get`)
        .then((res) => {
          if (!res.ok) {
            return res.json().then((errorData) => {
              throw new Error(`${errorData.message}`);
            });
          } else return res.json();
        })
        .then((data) => {
          // alert('Profile fetched successfully');

          setMsgColor("green");
          setMsg("Profile fetched successfully");

          setUser(data.user);
          setProfileImg(data.user.photo);
        })
        .catch((error) => {
          // alert(`ERROR: ${error.message}`);
          console.log(`ERROR : profile fetch : ${error.message}`);
          setMsgColor("red");
          setMsg(`Error while fetching profile, Please try again later`);
        });

      setLoading(false);  
    };
    fetchData();
  }, []);

  const fetchData = async (latitude, longitude) => {
    if (latitude !== 0 && longitude !== 0) {

      // console.log('Location fetched successfully', latitude, longitude);

      const data = {
        lat: latitude,
        lon: longitude,
        time: JSON.stringify(new Date()),
      };

      request.post(`${import.meta.env.VITE_API_BASE}/attendance/markAtt`, data, true)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            throw new Error(`${errorData.message}`);
          });
        } else return res.json();
      })
      .then((data) => {
        // console.log('DATA : ', data);
        // if (data.ok) alert(data.message);
        setMsg(`${data.message}`);
        setMsgColor(data.ok ? "green" : "red");
        setUser(data.user); 
      })
      .catch((err) => {
        // alert(`ERROR: ${err.message}`);
        console.log(`ERROR: marking att : ${err.message}`);
        setMsgColor("red");
        setMsg(`Error while marking attendance : ${err.message}`);
      })
    }
  };



  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = parseFloat(position.coords.latitude.toFixed(4));
          const longitude = parseFloat(position.coords.longitude.toFixed(4));

          setMsg("Location fetched successfully");
          setMsgColor("orange");
          
          fetchData(latitude, longitude);
        },
        (error) => {
          setMsgColor("red");
          setMsg(`Error in getting location, Please try again later.`);
          console.error('ERROR : getting location: ', error.message);
        }
      );
    } else {
      setMsgColor("red");
      setMsg("Geolocation is not supported by this browser.");
      console.error('ERROR: geolocation : Geolocation is not supported by this browser.');
    }
  };

  const handleMarkAttendance = () => {
    setMsgColor("#000");
    setMsg("Fetching Location information...");
    setLoading(true);
    getLocation();
    setLoading(false);
  };

  const handleSave = async() => {
    setEdit(false);
    setLoading(true);
    //make a fetch request to update the profile 
    if (user) {
      const formData = new FormData();
      formData.append('name', user.name);
      formData.append('email', user.email);
      formData.append('branch', user.branch);
      formData.append('team', user.team);
      formData.append('photo', file);

      request.put(`${import.meta.env.VITE_API_BASE}/profile/update`, formData)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            throw new Error(`${errorData.message}`);
          });
        } else return res.json();
      })
      .then((data) => {
        // alert('Profile updated successfully'); 
        setUser(data.user);
        setProfileImg(data.user.photo);

        setMsg('Profile updated successfully');
        setMsgColor("green");
      })
      .catch((err) => {
        // alert(`ERROR: ${err.message}`);
        console.log(`ERROR: profile update : ${err.message}`);
        setMsg(`Error while updating profile, ${err.message}`);
        setMsgColor("red");
      })
    }
    setLoading(false);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setFile(file);
    setProfileImg(imageURL);
  }

  return (<>
    <div className='profile-container'>
        <h1 className='profile-heading'>{user ? "PROFILE" : "Loading..." }</h1>
        {user && 
          <>
          <div className='profile-content'>
            <div className='profile-items-list'>
                <div className='profile-item'>
                  <h3>Name</h3>
                  <input 
                    type="text"
                    value={user.name}
                    name="user-name"
                    onChange={(e) => setUser((prev) => ({...user, name: e.target.value}))}
                    readOnly={!edit}
                  />
                </div>

                <div className='profile-item'>
                  <h3>Email</h3>
                  <input 
                    type="text"
                    value={user.email}
                    name="user-email"
                    readOnly={true}
                  />
                </div> 

                <div className='profile-item'>
                  <h3>Branch</h3>
                  <input 
                    type="text"
                    value={user.branch}
                    name="user-branch"
                    readOnly={true}
                  />
                </div>
                
                <div className='profile-item'>
                  <h3>Team</h3>
                  <input 
                    type="text"
                    value={user.team}
                    name="user-team"
                    readOnly={true}
                  />
                </div>

                <div className='profile-item'>
                  <h3>Work Duration</h3>
                  <input 
                    type="text"
                    value={user.attendance.length}
                    name="user-attendance"
                    readOnly={true}
                  />
                </div>
            </div>  
            <div className='profile-img-container'>
                <img src={profileImg || profile_image} alt="user_image" className='profile-img'/>
                {edit && (
                  <div className="profile-file-input-container">
                    <input
                      type="file"
                      className="profile-file-input"
                      name="photo"
                      id="photo"
                      onChange={(e) => handleUpload(e)}
                    />
                    <label htmlFor="photo" className="profile-choose-button">Choose File</label>
                    {file && <p className="profile-selected-file">Selected file: {file.name}</p>}
                  </div>)
                }
            </div>  
          </div>
          <div className='profile-btns'>
            <div className="profile-att-btn">
              <button onClick={handleMarkAttendance}>MARK ATTENDANCE</button>
            </div>
            <div className="profile-edit-btn">
                {
                  edit ? (<button onClick={(e) => handleSave(e)}>SAVE PROFILE</button>) :
                  (<button onClick={() => setEdit(!edit)}>EDIT PROFILE</button>)
                }
            </div>
            {user.privileges === "admin" && <div className="profile-get-att-btn">
              <NavLink to="/getAtt">GET ATTENDANCE</NavLink>
            </div>}
          </div>  
          </>
        }
    </div>
    {loading && <div className='profile-loading'>Loading ...</div>}
    {msg && <div className='profile-msg' style={{ color: msgColor }}>{msg}</div>}
    </>
  );
};

export default ProfilePage;
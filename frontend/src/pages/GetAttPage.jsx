import React, { useState, useEffect } from 'react'

import "../styles/pagesStyles/GetAttPage.css";
import peslogo from "../assets/peslogo.png";

import request from "../request.js";

// import { useNavigate } from "react-router-dom";

const GetAttendancePage = () => {
    // const navigate = useNavigate();

    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const [msg, setMsg] = useState("");
    const [msgColor, setMsgColor] = useState("#000");

    const [loading, setLoading] = useState(false);

    //TODO: Add protection for getAttendance page from volunteers 

    // //user not logged in trying to access Profile Page 
    // useEffect(() => {
    //     let loggedInUser = localStorage.getItem("token");
    //     if (!loggedInUser) {
    //         navigate("/login");
    //     }
    // }, []);

    const handleValidation = (month, year) => {
        const regex = /^[0-9]{4}$/;
        if (regex.test(year)) {
            const numericYear = Number(year);
            const currentYear = new Date ().getFullYear ();
            if (numericYear >= 2000 && numericYear <= currentYear) {
                const numericMonth = Number(month);
                if (numericMonth >= 1 && numericMonth <= 12) {
                    return true;
                } else setMsg("Please enter a valid month");
            } else setMsg("Please enter a valid year."); 
        } else setMsg("Please enter a valid year."); 
        setMsgColor("red");
        return false;
    }

    const handleClick = async() => {
        setMsg("");
        setMsgColor("#000");
        setLoading(true);

        if (!handleValidation(month, year)) {
            setLoading(false);
            return ;
        }

        const dataToSend = {
            month: month-1,
            year
        }

        request.post(`${import.meta.env.VITE_API_BASE}/attendance/getAtt`, dataToSend, true)
        .then((res) => {
            console.log("RES : ", res);
            if (!res.ok) {
                return res.json().then((errorData) => {
                    throw new Error(`${errorData.message}`);
                });
            } else return res.blob();
        })
        .then((data) => {
            if (data) {
                const url = window.URL.createObjectURL(data);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${month}_${year}_attendance.xlsx`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                console.log('Attendance fetched successfully');
                setMsgColor("green");
                setMsg('Attendance fetched successfully');
            }
        })
        .catch((err) => {
            console.log("ERROR : get Att : ", err.message);
            // alert("Something went wrong! Please check your internet connection.");
            setMsgColor("red");
            setMsg(err.message);
        });
        
        setLoading(false);
    };

    return (
    <div className='att-container'>
        <div className='att-div-logo'>
            <img src={peslogo} alt="pes_logo" className='att-pes-logo'/>
        </div>
        <h1 className='att-heading'>Attendance</h1>
        <div className='att-items'>
            <div className='att-input'>
                <input 
                    type="text" 
                    placeholder="Enter month" 
                    name="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                />
            </div>
            <div className='att-input'>
                <input 
                    type="text" 
                    placeholder="Enter year" 
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
        </div>
        <div>
            <button className="att-btn" onClick={handleClick}>Get Attendance</button>
        </div>
        {msg && <div style={{ color: msgColor }}>{msg}</div>}
        {loading && <h1>Loading ...</h1>}
    </div>
  )
}

export default GetAttendancePage
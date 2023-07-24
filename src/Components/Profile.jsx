import React, { useState, useEffect } from "react";
import axios from "axios";
import './profile.css'

const Profile = ({ userId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const fetchUserData = async () => {
    try {
      
      const response = await axios.get(`http://192.168.0.111:5000/users/${userId}`);
      const userData = response.data;

    
      setName(userData.name);
      setEmail(userData.email);
      
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    
    const user = {
      name: name,
      email: email,
      password: password
    };

    try {
      
      if (userId) {
        await axios.put(`http://192.168.0.111:5000/users/${userId}`, user);
        console.log("User updated successfully.");
      } else {
    
        await axios.post("http://192.168.0.111:5000/users", user);
        console.log("User added successfully.");
      }

    
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error adding/updating user:", error);
    }
  };

  return (
    <div className="pd bg-white">
      <form className="edit-form" onSubmit={handleSubmit}>
        <p>Write your name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Write your email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!userId && ( 
          <>
            <p>Write your password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Confirm your password</p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}
        <div className="btn-sub">
          <button type="submit">{userId ? "Update" : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./changePassword.css"; // Make sure to create this file and add the styles

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Assuming you store the token in localStorage

      await axios.post(
        "/auth/changepassword",
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Password changed successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Error changing password. Please try again.");
    }
  };

  return (
    <div className="change-password-container">
      <div className="form-container">
        <h2 className="title">Change Password</h2>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            placeholder="Enter Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn-change-password" onClick={handlePasswordChange}>
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;

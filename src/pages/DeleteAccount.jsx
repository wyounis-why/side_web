import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/DeleteAccount.css'

export default function DeleteAccount() {
  return (
    <div className="delete-account-page">
      <header className="delete-header">
        <Link to="/side-quest" className="back-button">
          ← Back
        </Link>
        <h1>Delete Account</h1>
      </header>

      <div className="delete-container">
        <div className="delete-card">
          <div className="warning-box">
            <h2>⚠️ Delete Your Account</h2>
            <p>
              To delete your account and all associated data from The Side Quest, please send an email to:
            </p>
          </div>

          <div className="contact-card">
            <p className="contact-instruction">
              Send your account deletion request to:
            </p>
            <p className="contact-email-large">
              <a href="mailto:contact@awebuilt.com">contact@awebuilt.com</a>
            </p>
            <p className="contact-instruction-sub">
              Include your account email address in your request, and we will process your deletion within 7 business days.
            </p>
          </div>

          <div className="info-box">
            <h3>What happens when you delete your account?</h3>
            <ul>
              <li>Your profile and all personal information will be permanently removed</li>
              <li>All your quests, achievements, and streak history will be deleted</li>
              <li>Your account access will be terminated immediately</li>
              <li>This action cannot be undone</li>
            </ul>
          </div>

          <button
            className="back-to-landing-btn"
            onClick={() => window.location.href = '/side-quest'}
          >
            Back to Project
          </button>
        </div>
      </div>
    </div>
  )
}

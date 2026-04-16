import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/InfoPages.css'

export default function Privacy() {
  return (
    <div className="info-page">
      <header className="info-header">
        <Link to="/side-quest" className="back-button">
          ← Back
        </Link>
        <h1>Privacy Policy</h1>
      </header>

      <div className="info-container">
        <div className="policy-header">
          <h2>The Side Quest</h2>
          <p>Why Enterprises LLC</p>
          <p className="last-updated">Last updated: March 29, 2026</p>
        </div>

        <section className="info-section">
          <p>
            Why Enterprises LLC ("Company", "we", "our", or "us") operates The Side Quest mobile application (the "App"). This Privacy Policy explains how we collect, use, and protect your information when you use the App.
          </p>
          <p>
            By using The Side Quest, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="info-section">
          <h2>Information We Collect</h2>
          <h3>Account Information</h3>
          <p>
            To use the App, users are required to create an account. We collect:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Password</li>
          </ul>
          <p>
            This information is used to create and manage your account and allow you to access app features.
          </p>
        </section>

        <section className="info-section">
          <h3>User Content</h3>
          <p>The App allows users to:</p>
          <ul>
            <li>Send messages to other users</li>
            <li>Track habits and routines</li>
            <li>Monitor progress toward goals</li>
            <li>Participate in challenges and streaks</li>
          </ul>
          <p>
            Messages and activity data may be stored on our servers to provide core functionality.
          </p>
        </section>

        <section className="info-section">
          <h3>Messaging and Communication</h3>
          <p>
            The Side Quest includes in-app messaging features that allow users to communicate with each other for accountability and motivation.
          </p>
          <p><strong>Please be aware:</strong></p>
          <ul>
            <li>Messages sent within the App are not end-to-end encrypted</li>
            <li>We cannot guarantee that messages will remain private</li>
            <li>Users should avoid sharing sensitive personal information within messages</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>How We Use Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Create and manage user accounts</li>
            <li>Provide habit tracking features</li>
            <li>Enable messaging between users</li>
            <li>Send notifications and reminders</li>
            <li>Track progress, streaks, and goals</li>
            <li>Improve app functionality and user experience</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Data Storage and Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no method of electronic storage or transmission over the internet is 100% secure.
          </p>
          <p>
            Because messaging within the App is not encrypted, users acknowledge that communications may not be fully secure.
          </p>
        </section>

        <section className="info-section">
          <h2>Sharing of Information</h2>
          <p>We do not sell user data.</p>
          <p>We may share information only:</p>
          <ul>
            <li>When required by law</li>
            <li>To protect the rights or safety of users</li>
            <li>To operate and maintain the App infrastructure</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Children's Privacy</h2>
          <p>
            The Side Quest is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
          <p>
            If we become aware that a child has provided personal information, we will take steps to remove such information.
          </p>
        </section>

        <section className="info-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted within the App or on our website with an updated revision date.
          </p>
        </section>

        <section className="info-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact:
          </p>
          <p>
            <strong>Why Enterprises LLC</strong><br />
            <strong>Email:</strong> <a href="mailto:contact@awebuilt.com">contact@awebuilt.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

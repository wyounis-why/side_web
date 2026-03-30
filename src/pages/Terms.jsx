import React from 'react'
import '../styles/InfoPages.css'

export default function Terms({ setCurrentPage }) {
  return (
    <div className="info-page">
      <header className="info-header">
        <button 
          className="back-button"
          onClick={() => setCurrentPage('landing')}
        >
          ← Back
        </button>
        <h1>Terms & Conditions</h1>
      </header>

      <div className="info-container">
        <div className="policy-header">
          <h2>The Side Quest</h2>
          <p>Why Enterprises LLC</p>
          <p className="last-updated">Last updated: March 29, 2026</p>
        </div>

        <section className="info-section">
          <p>
            These Terms of Service ("Terms") govern your use of The Side Quest mobile application (the "App") operated by Why Enterprises LLC ("Company", "we", "our", or "us").
          </p>
          <p>
            By creating an account or using the App, you agree to these Terms.
          </p>
        </section>

        <section className="info-section">
          <h2>1. Use of the App</h2>
          <p>
            The Side Quest is a habit tracking and accountability application that allows users to:
          </p>
          <ul>
            <li>Create personal accounts</li>
            <li>Track habits, routines, and goals</li>
            <li>Monitor streaks and progress</li>
            <li>Participate in challenges and side quests</li>
            <li>Send messages to other users for motivation and accountability</li>
            <li>Receive notifications and reminders</li>
          </ul>
          <p>
            You agree to use the App only for lawful purposes and in accordance with these Terms.
          </p>
        </section>

        <section className="info-section">
          <h2>2. Account Registration</h2>
          <p>To use the App, you must create an account and provide:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Password</li>
          </ul>
          <p>You agree that:</p>
          <ul>
            <li>The information you provide is accurate</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials</li>
            <li>You are responsible for all activity under your account</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these Terms.
          </p>
        </section>

        <section className="info-section">
          <h2>3. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for unlawful or harmful purposes</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Send spam or unsolicited messages</li>
            <li>Share offensive, harmful, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to other accounts or systems</li>
            <li>Interfere with the operation or security of the App</li>
          </ul>
          <p>
            We reserve the right to remove content or suspend accounts that violate these rules.
          </p>
        </section>

        <section className="info-section">
          <h2>4. Messaging Disclaimer</h2>
          <p>
            The App allows users to send messages to each other.
          </p>
          <p>By using messaging features, you acknowledge:</p>
          <ul>
            <li>Messages are not end-to-end encrypted</li>
            <li>We cannot guarantee the security of messages</li>
            <li>You should not share sensitive personal information through the App</li>
            <li>We are not responsible for user-generated content</li>
          </ul>
          <p>
            Users are responsible for the content they share.
          </p>
        </section>

        <section className="info-section">
          <h2>5. Notifications</h2>
          <p>
            The App may send notifications related to:
          </p>
          <ul>
            <li>Habit reminders</li>
            <li>Messages from other users</li>
            <li>Progress updates</li>
            <li>Challenges and streak activity</li>
          </ul>
          <p>
            You can manage notification preferences in your device settings.
          </p>
        </section>

        <section className="info-section">
          <h2>6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the App, including design, graphics, logos, and software, are owned by Why Enterprises LLC and are protected by applicable intellectual property laws.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Copy</li>
            <li>Modify</li>
            <li>Distribute</li>
            <li>Reverse engineer</li>
          </ul>
          <p>
            any part of the App without permission.
          </p>
        </section>

        <section className="info-section">
          <h2>7. Termination</h2>
          <p>
            We may suspend or terminate access to the App at any time if:
          </p>
          <ul>
            <li>You violate these Terms</li>
            <li>We discontinue the App</li>
            <li>Required by law</li>
          </ul>
          <p>
            You may stop using the App at any time.
          </p>
        </section>

        <section className="info-section">
          <h2>8. Disclaimer</h2>
          <p>
            The Side Quest is intended for informational and motivational purposes only.
          </p>
          <p>
            We do not guarantee:
          </p>
          <ul>
            <li>Achievement of goals</li>
            <li>Habit formation success</li>
            <li>Continuous availability of the App</li>
          </ul>
          <p>
            The App is provided "as is" without warranties of any kind.
          </p>
        </section>

        <section className="info-section">
          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Why Enterprises LLC shall not be liable for:
          </p>
          <ul>
            <li>Loss of data</li>
            <li>Loss of progress or streaks</li>
            <li>User disputes</li>
            <li>Damages resulting from use of the App</li>
            <li>Unauthorized access to user content</li>
          </ul>
          <p>
            Use of the App is at your own risk.
          </p>
        </section>

        <section className="info-section">
          <h2>10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the App after changes means you accept the updated Terms.
          </p>
        </section>

        <section className="info-section">
          <h2>11. Contact</h2>
          <p>
            If you have questions about these Terms, contact:
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

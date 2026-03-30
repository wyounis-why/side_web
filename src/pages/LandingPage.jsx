import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'
import groupLogo from '../assets/group.png'

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={groupLogo} alt="Side Quest Logo" className="hero-logo" />
          <h1 className="hero-title_small">THE</h1>
          <h1 className="hero-title">SIDE QUEST</h1>
          <p className="hero-subtitle">
            Every day is a new quest where you become your best self.
            <br />
            Not alone, but alongside your teammates.
          </p>
          <button className="cta-button">Download App</button>
        </div>
        <div className="hero-gradient"></div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-card">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">
            Welcome to your journey. Every day is a new quest where you become 
            your best self—not alone, but alongside your teammates. Through Side 
            Quests, you embark on challenges that matter, track your victories, 
            and celebrate wins together. This is more than habit tracking; it's a 
            quest for growth, accountability, and triumph.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-title">Why Side Quest?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Unlimited Side Quests</h3>
            <p>Create as many side quests as you want and track your progress together with your team.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🔔</div>
            <h3>Priority Notifications</h3>
            <p>Get instant push notifications for all pings so you never miss a moment with your team.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📊</div>
            <h3>Analytics</h3>
            <p>Track detailed progress and streak history to watch yourself and your team grow.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💬</div>
            <h3>In-App Messaging</h3>
            <p>Chat and keep up with your players' progress in real-time from within the app.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <span className="link-divider">•</span>
          <Link to="/terms" className="footer-link">
            Terms & Conditions
          </Link>
          <span className="link-divider">•</span>
          <Link to="/delete-account" className="footer-link">
            Delete Account
          </Link>
        </div>
        <p className="footer-contact">
          Questions? Contact us at: <a href="mailto:contact@awebuilt.com">contact@awebuilt.com</a>
        </p>
        <p className="footer-copyright">© 2025 Why Enterprises LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/InfoPages.css'

export default function ContactUs() {
  return (
    <div className="info-page">
      <header className="info-header">
        <Link to="/side-quest" className="back-button">
          ← Back
        </Link>
        <h1>Contact Us</h1>
      </header>

      <div className="info-container">
        <div className="policy-header">
          <h2>The Side Quest</h2>
          <p>Why Enterprises LLC</p>
          <p className="last-updated">Last updated: April 7, 2026</p>
        </div>

        <section className="info-section">
          <h2>Our Mission</h2>
          <p>
            Welcome to your Side Quest. Every day is a new quest where you become your best self—not alone, but alongside your teammates. Through Side Quests, you embark on challenges that matter, track your victories, and celebrate wins together. This is more than habit tracking; it&apos;s a quest for growth, accountability, and triumph.
          </p>
        </section>

        <section className="info-section">
          <h2>Contact Support</h2>
          <p>
            If you need help with your account, purchases, login issues, or anything else in The Side Quest, reach out and we&apos;ll get back to you.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:contact@awebuilt.com">contact@awebuilt.com</a>
          </p>
          <p>
            Include any useful details like the email tied to your account, the device you&apos;re using, and screenshots if something is broken.
          </p>
        </section>
      </div>
    </div>
  )
}
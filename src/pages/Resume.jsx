import React from 'react'
import { Link } from 'react-router-dom'
import resumePdf from '../assets/Resume.pdf'
import '../styles/ResumePage.css'

export default function Resume() {
  return (
    <div className="resume-page">
      <header className="resume-header">
        <Link to="/" className="resume-back-link">
          ← Back to portfolio
        </Link>
        <a href={resumePdf} className="resume-download-link" target="_blank" rel="noreferrer">
          Open PDF
        </a>
      </header>

      <main className="resume-content">
        <div className="resume-intro">
          <p className="resume-kicker">Resume</p>
          <h1>Walid Younis</h1>
        </div>

        <div className="resume-frame-wrap">
          <object data={resumePdf} type="application/pdf" className="resume-frame" aria-label="Walid Younis resume PDF">
            <p>
              This browser cannot preview the PDF. <a href={resumePdf} target="_blank" rel="noreferrer">Open the resume</a>.
            </p>
          </object>
        </div>
      </main>
    </div>
  )
}
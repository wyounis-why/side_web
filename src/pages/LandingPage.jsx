import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PortfolioPage.css'

const featuredProjects = [
  {
    title: 'The Sun Magazine',
    type: 'Publishing Platform',
    status: 'Rails + React + MySQL',
    description:
      'A reader-supported magazine platform with archive search, issue browsing, and subscription flows.',
    technologies: ['Rails', 'React', 'MySQL'],
    href: 'https://www.thesunmagazine.org/',
  },
  {
    title: 'AgProud',
    type: 'Media Site',
    status: 'Rails + React + MySQL',
    description:
      'An agriculture publishing site supporting multiple content categories, newsletters, directories, and subscription paths.',
    technologies: ['Rails', 'React', 'MySQL'],
    href: 'https://agproud.com/',
  },
  {
    title: 'WholeFoods Magazine',
    type: 'Editorial Brand',
    status: 'Rails + React + MySQL',
    description:
      'A digital publishing property for health and wellness content, included here as part of the production sites I helped ship.',
    technologies: ['Rails', 'React', 'MySQL'],
    href: 'https://www.wholefoodsmagazine.com/',
  },
  {
    title: 'Your Observer',
    type: 'News Platform',
    status: 'Django + Python',
    description:
      'A local news platform with heavy editorial throughput, category-driven navigation, and high-volume content publishing.',
    technologies: ['Django', 'Python'],
    href: 'https://www.yourobserver.com/',
  },
  {
    title: 'Try Nibl',
    type: 'Mobile Product',
    status: 'React Native',
    description:
      'A React Native product included as part of the mobile apps I have worked on and shipped.',
    technologies: ['React Native'],
    href: 'https://trynibl.com/',
  },
]

export default function LandingPage() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-copy">
          <p className="portfolio-kicker">Walid Younis Portfolio</p>
          <h1>Products,and projects I&apos;ve Built.</h1>
          <p className="portfolio-summary">
            5 years in Software Engineer leading teams in devloping and launching products across web and mobile. 
          </p>
          <div className="portfolio-contact-card">
            <p className="portfolio-contact-line">
              <a href="mailto:walid.younis.25@gmail.com">walid.younis.25@gmail.com</a>
            </p>
            <div className="portfolio-actions">
              <a
                href="https://www.linkedin.com/in/walid-younis-2025/"
                className="portfolio-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Walid Younis on LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="portfolio-link-icon">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03 2.04 2.04 0 0 0 5.25 7.1c1.14 0 2.05-.92 2.05-2.06C7.3 3.92 6.39 3 5.25 3Zm15.55 9.87c0-3.47-1.85-5.08-4.33-5.08-2 0-2.89 1.1-3.39 1.88V8.5H9.7c.04.78 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.67.9-1.37 1.94-1.37 1.37 0 1.92 1.04 1.92 2.57V20h3.38v-6.74Z" />
                </svg>
                LinkedIn
              </a>
              <Link to="/resume" className="portfolio-link">
                Resume
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-header">
          <h2>Selected Projects</h2>
          <p>Side Quest is one of my own products, alongside production sites I&apos;ve helped build and launch.</p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card project-card-secondary" key={project.title}>
              <div className="project-card-top">
                <span className="project-tag">{project.type}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-meta">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <a href={project.href} className="project-link project-link-secondary" target="_blank" rel="noreferrer">
                Visit site
              </a>
            </article>
          ))}

          <article className="project-card project-card-secondary">
            <div className="project-card-top">
              <span className="project-tag">Mobile App</span>
              <span className="project-status">Active Project</span>
            </div>
            <h3>Side Quest</h3>
            <p>
              A habit and accountability app built around team-based quests, streaks, progress tracking,
              and in-app messaging.
            </p>
            <div className="project-meta">
              <span>Habits</span>
              <span>Accountability</span>
              <span>Social Progress</span>
            </div>
            <Link to="/side-quest" className="project-link project-link-secondary">
              View project
            </Link>
          </article>
        </div>
      </section>
    </div>
  )
}

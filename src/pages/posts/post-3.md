---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Neuroscience Research Portfolio"
pubDate: 2025-12-25
description: ""
author: "Afnaan Qasim"
image:
  url: ""
  alt: ""
tags: [""]
---

<div class="project-hero">
  <div class="hero-header">
    <a href="/projects" class="back-link">← Work</a>
    <h1>Nothing to see here... yet.</h1>
    <img src=/TheRock.webp class=hero-image>
  </div>
</div>

<style>
.project-hero {
  margin-bottom: 3rem;
}

.hero-header {
  margin-bottom: 2rem;
}

  
.hero-image {
    width:20%;
    height: 20%;
    object-fit: cover;
    border-radius: var(--radius-lg, 1.5rem);
    box-shadow: var(--shadow-lg);
  }
.back-link {
  display: inline-flex;
  align-items: center;
  color: #8b5cf6;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: #7c3aed;
}

.project-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  line-height: 1.2;
}

.tags {
  display: flex;
  gap: 0.75rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.tag {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: inherit;
  max-width: 900px;
}

h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
  color: inherit;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: inherit;
}

p {
  line-height: 1.75;
  color: inherit;
  margin-bottom: 1.5rem;
}

ul, ol {
  line-height: 1.75;
  color: inherit;
  margin: 1rem 0 1.5rem 1.5rem;
}

ul {
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
}

li {
  margin-bottom: 0.5rem;
  color: inherit;
  display: list-item;
}

code {
  background: rgba(139, 92, 246, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
  color: #a78bfa;
  font-family: 'Courier New', monospace;
}

pre {
  background: rgba(30, 41, 59, 0.5);
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

pre code {
  background: none;
  padding: 0;
  color: #e2e8f0;
}

strong {
  color: inherit;
  font-weight: 600;
}

hr {
  border: none;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  margin: 3rem 0;
}
</style>

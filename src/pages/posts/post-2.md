---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Neuroscience Research Portfolio"
pubDate: 2025-12-25
description: "Collection of neuroscience research projects spanning EEG analysis, cardiovascular physiology, and experimental design in exercise science"
author: "Afnaan Qasim"
image:
  url: ""
  alt: ""
tags: ["Neuroscience", "Physiology", "Research", "Data Analysis"]
---

<div class='lg:max-w-prose mx-auto'>
<div class="project-hero">
  <div class="hero-header">
    <a href="/projects" class="back-link">← Work</a>
    <h1>Neuroscience Research Portfolio</h1>
    <div class="tags">
      <span class="tag">Physiology</span>
      <span class="tag">Research</span>
      <span class="tag">Data Analysis</span>
    </div>
  </div>
  
  <p class="hero-description">
    A collection of projects I've produced over the years.
  </p>
</div>

## EEG Analysis of Alpha and Beta Brainwave Dynamics

Conducted an electroencephalography (EEG) study at Queen Mary University investigating how alpha waves (8-13 Hz) and beta waves (13-30 Hz) change between eyes-open and eyes-closed states. Using the International 10-20 electrode placement system and PowerLab equipment, I measured brainwave amplitude and frequency across different conscious states. The hypothesis predicted increased alpha activity during eyes-closed (relaxed state) and decreased beta activity, but statistical analysis using two-tailed T-tests revealed no significant differences between states.

This unexpected outcome highlighted the importance of individual variability in neuroscience research and demonstrated that conscious state transitions are more complex than simple frequency band shifts. The project provided hands-on experience with EEG signal acquisition, artifact control, electrode placement precision, and rigorous statistical validation - reinforcing that negative results are scientifically valuable when they inform future experimental designs.

## Control of Breathing: Diaphragmatic Effects on Cardiac Axis

Investigated how diaphragmatic breathing patterns influence the mean electrical axis (MEA) of the heart using electrocardiography. The study tested 65 subjects performing deep inhalation versus deep expiration while recording ECG readings across leads I, II, III, and aVF. By calculating the MEA using trigonometric equations from Lead I and aVF measurements, we quantified how the physical movement of the diaphragm during breathing shifts the heart's position within the thoracic cavity, thereby altering the electrical depolarisation axis. Statistical analysis using T-tests (p < 0.05) demonstrated significant differences between deep inhalation and deep expiration states, with deep inhalation producing a more vertical MEA as hypothesized. This project combined knowledge of cardiac electrophysiology, respiratory mechanics, and anatomical relationships to explain how a physiological process (breathing) affects biomedical measurements (ECG readings) - a critical consideration for clinical ECG interpretation.

## Calisthenics vs Resistance Training: Balance and Proprioception Study Design

Designed a comprehensive 8-week experimental protocol comparing calisthenics training (bodyweight exercises) to traditional resistance training (machine/barbell exercises) for their effects on balance and proprioception in young, trained individuals. The study design included 30 participants split into two groups, with matched training intensity (RPE 8), volume (3 sets), and rest periods (90 seconds) to isolate the training modality as the independent variable. Primary outcomes included validated assessment tools: single-leg stance test, Berg Balance Scale for balance, and the Active Movement Extent Discrimination Apparatus (AMEDA) for proprioception. Secondary measures tracked strength and hypertrophy to ensure neither protocol compromised muscle development.

The design incorporated rigorous controls including 48-hour pre-testing activity restrictions, dietary tracking via MyFitnessPal, and paired T-tests for statistical analysis. The clinical rationale connected to fall prevention in elderly populations, where balance deterioration contributes to 328 indoor falls per 1,000 person-years. This research proposal demonstrated competencies in experimental design, exercise physiology, statistical methodology, and integration of biomechanical theory with practical health applications.

## Neural Plasticity and Auditory Perception (Literature Review)

Contributed to a comprehensive review examining the relationship between auditory neurophysiology and musical perception, focusing on how the auditory system encodes and interprets sound. The work explored neuroplasticity and sensory compensation, analysing evidence that when the visual cortex is not fully developed (as in congenitally blind individuals), other modality-specific areas like auditory processing regions can expand their functionality. We examined research on auditory nerve fiber populations, characterizing how different spontaneous firing rates correlate with frequency selectivity and threshold properties.

The review detailed temporal encoding mechanisms including phase-locking (where action potentials align with specific waveform phases) and interspike interval histograms that reveal stable temporal patterns contributing to vowel identity encoding. We analysed the psychoacoustic concepts of musical consonance and dissonance, tracing theories from Pythagoras to Helmholtz's proposal that dissonance results from roughness perception. The critical band concept explained why minor thirds sound dissonant in bass registers but consonant in higher octaves. This project demonstrated ability to synthesise complex neuroscience literature, integrate historical and contemporary research perspectives, and explain how neural mechanisms produce perceptual experiences.

</div>

<style>
.project-hero {
  margin-bottom: 3rem;
}

.hero-header {
  margin-bottom: 2rem;
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

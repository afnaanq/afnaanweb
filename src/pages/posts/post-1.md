---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Deep Reinforcement Learning for Traffic Signal Control"
pubDate: 2025-12-25
description: "Optimizing urban traffic flow using Deep Q-Networks (DQN) in CityFlow simulation - reducing congestion through intelligent signal control"
author: "Afnaan Qasim"
image:
  url: ""
  alt: ""
tags: ["Machine Learning", "Python", "PyTorch", "Reinforcement Learning"]
---

<div class='lg:max-w-prose mx-auto'>
<div class="project-hero">
  <div class="hero-header">
    <a href="/projects" class="back-link">← Work</a>
    <h1>Deep RL for Traffic Signal Control</h1>
    <div class="tags">
      <span class="tag">Python</span>
      <span class="tag">PyTorch</span>
      <span class="tag">Reinforcement Learning</span>
    </div>
  </div>
  
  <p class="hero-description">
    We thought traffic lights in America weren't smart, so we tried to make them think for once.
  </p>
</div>

## The Problem

The Texas A&M Transportation Institute reports that traffic light delays account for 12-55% of total commute time. Despite affecting millions daily, most cities still rely on static timer-based systems that fail to respond to real-time traffic conditions. While some Intelligent Transportation Systems (ITS) exist, they use predefined logic that lacks adaptivity during special events and often optimise locally rather than across multiple intersections.

Our team recognised both the societal impact and the gap in current solutions, setting out to build a traffic simulation powered by reinforcement learning to optimise grid-wide operations dynamically.

## Technical Approach

### Environment Setup

We configured a realistic traffic environment using **CityFlow**, a microscopic traffic simulator, where we defined intersection layouts, traffic routes, and vehicle behavior. The simulation was packaged in Docker to ensure reproducibility and proper integration with CityFlow's controlling API.

The environment features:

- Defined incoming lanes as state features
- Discrete action space of 9 traffic light phases (selected for accident-free operation)
- 1×1 intersection with 3,600 seconds (one hour) of real-time traffic data

### Deep Q-Network Architecture

We implemented a DQN agent that approximates the Q-function using a neural network:

**Q-Value Computation:**

```
Q(s, a) = r + γ max Q(s', a')
```

Where:

- `r` is the immediate reward for current state and action
- `max Q(s', a')` is the estimated maximum future reward from the next state
- `γ = 0.99` is the discount factor for future rewards

**Network Components:**

- **Q-Network**: Standard feedforward architecture with two fully connected layers and ReLU activations
- **Target Network**: Separate network providing stable Q-value targets during training
- **Experience Replay Buffer**: Stores transitions `(s, a, r, s', d)` where `d` indicates episode termination

**Key Hyperparameters:**

- Learning rate: 0.001
- Batch size: 64
- Discount factor (γ): 0.99
- ε-greedy policy: 10% random exploration, 90% exploitation
- Target network sync: Every 10 episodes

### Reward Function Design

We experimented with three reward strategies:

**1. Pressure-Based Reward**
Minimises traffic congestion by penalising queue imbalances:

```
P = Σ (q_l - Σ q_l')
```

Where `q_l` is the queue length on incoming lane `l`, and `q_l'` represents successor lanes.

**Advantages:** Encourages realistic, responsive control and minimises incoming/outgoing traffic differences  
**Limitations:** May cause long queues in anticipation of future rewards

**2. Count-Based Reward**
Directly penalises total waiting vehicles:

```
R_count = -Σ q_l
```

**Advantages:** Simple and effective at reducing current queue lengths  
**Limitations:** May lead to bottlenecking in other network regions

**3. Combined Count + Pressure (Our Final Approach)**
Balances immediate queue reduction with long-term flow management:

```
R = α · R_count + (1 - α) · R_pressure, with α = 0.5
```

This hybrid approach reduces long waiting lines while preventing downstream bottlenecks.

## Training Process

The DQN training loop follows these steps:

1. Reset environment and initialise state `s_0`
2. For each timestep `t`:
   - Select action `a_t` using ε-greedy policy (10% random, 90% DQN-based)
   - Apply action and observe next state `s_{t+1}`, reward `r_t`, and done flag `d_t`
   - Store transition `(s_t, a_t, r_t, s_{t+1}, d_t)` in replay buffer
   - Sample random batch from buffer
   - Update Q-network using Bellman equation
   - Periodically sync target network weights
3. Record episode metrics (total reward, duration)

**Experience Replay Benefits:**

- Reduces computational cost by learning from sampled data
- Breaks temporal correlations by randomly sampling experiences
- Exposes network to diverse contexts rather than sequential niche experiences

## Results

Our DQN agent successfully learned effective policies for traffic optimisation:

**Performance Metrics:**

- Successfully cleared all generated traffic in **3,600 seconds** (same as generation time)
- Baseline control system required **4,200 seconds** to clear the same traffic
- **~14% improvement** in traffic clearance time

Both Count-Based and Combined Pressure-Count reward functions demonstrated strong performance in reducing traffic flow and achieving the target clearance time.

## Technical Implementation

**Technology Stack:**

- **CityFlow**: Traffic simulation environment
- **PyTorch**: Deep learning framework for DQN
- **Docker**: Environment containerisation
- **Python**: Primary development language

**State Representation:**

- Vehicle counts per lane
- Queue lengths
- Optional enhancements: wait times, time since last phase change (not fully utilised in final version)

**Action Space:**

- 9 discrete traffic light phases ensuring accident-free operation
- Phases selected based on safety constraints and real-world feasibility

**GitHub Repository:** [Traffic_RL2](https://github.com/afnaanq/traffic-rl)

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
  list-style-color: currentColor;

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

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
  text-decoration: underline;
}
</style>

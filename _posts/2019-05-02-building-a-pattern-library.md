---
layout: post
title: 'Building a pattern library'
date: 2019-05-01 14:22:45 +0100
categories: front-end
---

For the past year, I've been working for [Blackbullion](http://blackbullion.com) as a front-end developer, and I wanted to talk a little bit about the pattern library/styleguide I've been building there, since it was a new experience for me. There were great benefits, but also some challenges, both of which I'll go into detail on. But first, some backstory:

## Who are Blackbullion?

Blackbullion are an edtech startup looking to help students become more financially capable, which they're attempting to do via an online learning platform, where users can engage with many different types of content and then be tested on their knowledge.

The company began with Vivi Friedgut, the founder, travelling the country and giving talks to rooms full of students at various universities. Some students suggested it would be good to have access to the knowledge she was providing either online or via an app, something that they could see on their phone. And so the learning platform was born.

Development was originally outsourced, and a rough and ready version of the platform was built. It didn't look great, but the learning content was there; users could watch videos, create budgets and join email-centric financial bootcamps.

After a while, the company decided to bring development in house, first hiring a CTO, who then started building up a product team of designers, UX specialists and front-end developers, which is where I come in.

## Pattern Lab

Arriving at Blackbullion, I had been looking for an excuse to introduce the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) principle to a project for a little while. I'd recently decided to specialise in front-end development (after years of being a jack-of-all-trades with an inclination towards front-end development), and I was fascinated with the idea of creating a pattern library and styleguide, of having a catalogue of modular components that can easily be reused throughout a project. This was the perfect opportunity for that, so I spoke about it in the interview for the role, and began work on it on my first day.

Having read Brad Frost's post, and the [associated book](http://atomicdesign.bradfrost.com/), I chose to use [Pattern Lab](https://patternlab.io/) as the foundation of our pattern library, in order to quickly get something visual in front of the rest of the company, and prove the idea.

Set up and configuration took some time, perhaps a day or so, while I wrapped my head around Pattern Lab's config options, and figured out the various grunt tasks I'd most likely need to use day to day. SCSS was essential, and I also wanted to be able to use ES6 modules, so Babel and Browserify had to be included. There was some trial and error, but eventually landed on a setup that I could work with.

As far as getting something visual in front of the company, I spoke with the designer about establishing a set color palette and font size scheme - very basic, I know, but important nonetheless for beginning to establish consistency in regards to the platform's visual identity - and quickly created a library of SCSS variables for both that could be referenced throughout the project. I then created the mustache templates needed to represent these colors and font sizes in the pattern library, and presented them to the rest of the company. Again, I'm aware this is a very basic step, but to the company it represented an important first step toward a consistent look and feel that had previously been missing.

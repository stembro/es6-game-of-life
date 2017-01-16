# es6-game-of-life

[![Build Status](https://travis-ci.org/stembro/es6-game-of-life.svg?branch=master)](https://travis-ci.org/stembro/es6-game-of-life)

The current javascript ecosystem can be difficult to wrap your mind around. This is a simple project which I created to primarily help with two things:

- Learning new ES6 language features
- Learning how to set up and use a more modern javascript development environment

Get started quickly by cloning the repo and then:
* `npm install`
* `npm start -s`

A production build can be generated via:
* `npm run build`

The game supports the following features:
- User-defined grid size (set via query string (e.g., ?w=100&h=40))
- Auto-run ('start' button or set via query string (e.g., ?r=true))
- Randomized board (check the checkbox and then click reset or set via query string (e.g., ?d=r))
- Creating a custom board (click into cells to toggle state or set via query string (e.g., ?d=1,1;1,2;1,3))
- Single-step through generations ('step' button)
- User-defined evolution speed (use the slider or set via query string (e.g., ?gpm=2500 to run 2500 generations per minute))

Check out the [Hosted Demo](http://es6-game-of-life.surge.sh/)!

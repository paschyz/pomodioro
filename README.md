![image](https://github.com/paschyz/pomodioro/assets/92926579/70bfcdfd-2b80-4fda-9fca-a634a87094fb)
# Pomodioro

A simple Pomodoro timer built with vanilla JavaScript, featuring a retro pixel-art inspired interface.

Pomodioro helps users stay focused by alternating between focused work sessions and short breaks using the Pomodoro technique.

## Live Demo

**[Try Pomodioro](https://pomodioro-33a40.web.app)**

## Features

* 25-minute focus sessions
* 5-minute break sessions
* Automatic switch between work and break modes
* Start, pause and resume timer
* Visual distinction between focus and break sessions
* Audio feedback when pausing or resuming the timer
* Retro pixel-art inspired interface
* Lightweight and dependency-free frontend
* Deployed with Firebase Hosting

## Tech Stack

* **HTML5** — page structure
* **CSS3** — styling, layout and animations
* **JavaScript** — timer logic and interactions
* **Firebase Hosting** — deployment
* **GitHub Actions** — deployment workflows

## How It Works

Pomodioro uses a simple countdown system written in vanilla JavaScript.

The default cycle consists of:

| Mode  | Duration   |
| ----- | ---------- |
| Focus | 25 minutes |
| Break | 5 minutes  |

When the countdown reaches zero, the application automatically switches between **focus** and **break** modes.

The timer can also be paused and resumed at any time.

## Project Structure

```text
pomodioro/
├── .github/
│   └── workflows/
├── public/
│   ├── animations/
│   ├── audio/
│   ├── fonts/
│   ├── images/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── .firebaserc
├── firebase.json
└── README.md
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/paschyz/pomodioro.git
```

Navigate to the project:

```bash
cd pomodioro
```

Since the project does not require a build step or external dependencies, you can serve the `public` directory using any local HTTP server.

For example, with Python:

```bash
cd public
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

The application is hosted using **Firebase Hosting**.

Firebase configuration is defined through:

```text
firebase.json
.firebaserc
```

GitHub Actions workflows are also included for Firebase Hosting deployments.

## Purpose

This project was created as a lightweight implementation of the Pomodoro technique while experimenting with:

* Vanilla JavaScript timer logic
* DOM manipulation
* CSS animations and styling
* Browser audio
* Static web application deployment
* Firebase Hosting
* GitHub Actions

## Author

**Pascal Zhou**

GitHub: [@paschyz](https://github.com/paschyz)

## License

No license is currently specified for this repository.

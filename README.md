# Coding Streams Project

See how experienced developers solve problems in real-time.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Introduction

Watching scripted tutorials is great, but understanding how developers think is invaluable.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/jrp-dev/coding-streams.git
   ```

2. Navigate to the project directory:

   ```bash
   cd coding-streams
   ```

3. Install the required dependencies using npm.

   ```bash
   npm install
   ```

## Usage

Once the project is set up, you can run it locally by following these steps:

1. Make sure you are in the project directory.

2. Run the project using the appropriate command.

   ```bash
   npm start
   ```

3. Access the project in your browser by navigating to `http://localhost:3000` (or a different port if specified).

## Folder Structure

The project follows a specific folder structure, as outlined below:

```
.
└── coding-stream/
    ├── src/
    │   ├── assets/
    │   │   └── images
    │   ├── components/
    │   │   ├── Input/
    │   │   │   ├── index.js
    │   │   │   ├── index.test.js
    │   │   │   └── styles.module.css
    │   │   └── ...
    │   ├── constants/
    │   │   └── index.js
    │   ├── pages/
    │   │   ├── homepage/
    │   │   │   ├── index.js
    │   │   │   ├── index.test.js
    │   │   │   ├── styles.module.css
    │   │   │   └── useViewModel.js
    │   │   └── ...
    │   └── ...
    └── ...
```

The main source code resides in the `src/` directory, which is further organized into subdirectories based on functionality. The `components/` directory contains reusable React components, while the `constants/` directory holds constant values.

The `assets/` directory constains assets for the project like `images/`

The `public/` directory contains static files such as the HTML template (`index.html`), images, or other assets used by the project.

Configure theme object in `src/constants/index`.

Configure colors in `src/constants/index` and `src/App.css`.

Each component has a css module located in each of their own folder.

Test files are included in each of their own folder.
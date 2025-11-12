# Portfolio - Akash Kumar :movie_camera:

A modern, creative portfolio website showcasing my work as a Software Engineer. Built with Next.js, featuring animated components, scroll effects, and a responsive design.

## Repository

[GitHub Repository](https://github.com/akashkumar916/Portfolio_)

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Features](#features-sparkles)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Deployment](#deployment-rocket)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION (with typing animation)
- ABOUT ME
- EXPERIENCE
- SKILLS & TECHNICAL EXPERTISE
- PROJECTS
- EDUCATION
- FUN FACTS & HIGHLIGHTS
- RECOMMENDATIONS
- CONTACT

---

# Features :sparkles:

- ✨ **Animated Typing Effect** - Dynamic text animation in hero section
- 🎨 **Scroll Reveal Animations** - Smooth fade-in effects on scroll
- 🌈 **Animated Gradients** - Beautiful gradient text and backgrounds
- 💫 **3D Card Effects** - Interactive hover effects on cards
- 📊 **Progress Bars** - Visual representation of technical expertise
- 🎯 **Sticky Scroll Sections** - Experience and Projects sections with sticky cards
- 🚀 **Scroll Progress Indicator** - Visual progress bar at the top
- 💡 **Glow Effects** - Subtle glow animations on interactive elements

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```bash
node --version
git --version
```

## <br />

# Getting Started :dart:

### Clone the repository

Open your terminal and run the following commands:

```bash
git clone https://github.com/akashkumar916/Portfolio_.git

cd Portfolio_
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Running with Docker Compose

1. **Build Docker Image and Run Container**:

   ```bash
   docker-compose up --build
   ```

2. **Access the Application**:
   Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

### Building the Docker Image

1. **Build the Docker Image using Dockerfile.dev**:

   ```bash
   docker build -t nextjs-app -f Dockerfile.dev .
   ```

2. **Running the Docker Container**:

   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

3. **Access the Application**:
   Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

# Usage :joystick:

Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_GTM =
NEXT_PUBLIC_APP_URL =
TELEGRAM_BOT_TOKEN =
TELEGRAM_CHAT_ID =
GMAIL_PASSKEY =
EMAIL_ADDRESS =
```

### Customize data in the `utils/data` folder

Update the following files with your information:

- `personal-data.js` - Your personal information and social links
- `experience.js` - Your work experience
- `projects-data.js` - Your projects
- `educations.js` - Your education
- `skills.js` - Your technical skills
- `testimonials.js` - Recommendations/testimonials
- `contactsData.js` - Contact information

Example:

```javascript
export const personalData = {
  name: "AKASH KUMAR",
  profile: '/png/akky.jpg',
  designation: "Software Engineer",
  description: "Hey there, I'm AKASH KUMAR! I'm a Software Engineer passionate about building scalable systems and optimizing performance...",
  email: 'akashkumaruf@gmail.com',
  phone: '(352)740-6786',
  address: 'Seattle WA, USA (Open to relocation)',
  github: 'https://github.com/akashkumar916',
  linkedIn: 'https://www.linkedin.com/in/akashkumar',
  leetcode: 'https://leetcode.com/u/akash_kumar916/',
  resume: "https://drive.google.com/file/d/15bNhr7I1Xr4aod0F-VX3pX28lyRLJB6i/view?usp=sharing"
};
```

---

# Deployment :rocket:

Deploying the app to platforms like Vercel or Netlify is quick and easy.

## Deploying to Vercel:

1. **Sign up or log in** to [Vercel](https://vercel.com/).
2. Once logged in, click on **"New Project"**.
3. Select your **GitHub repo** (the one that contains your forked project) and click **Import**.
4. Configure your environment variables in the Vercel dashboard by adding each key from your `.env` file.
   - E.g., `NEXT_PUBLIC_GTM`, `NEXT_PUBLIC_APP_URL`, `TELEGRAM_BOT_TOKEN`, etc.
5. Click on **Deploy**. Vercel will automatically detect your Next.js app and build it.
6. Once the deployment is complete, you can visit your live website!

### Updating After Deployment

Whenever you push changes to your GitHub repo, Vercel will automatically redeploy the app, keeping your portfolio up-to-date.

## Deploying to Netlify:

1. **Sign up or log in** to [Netlify](https://www.netlify.com/).
2. In the **Netlify Dashboard**, click **"New site from Git"**.
3. Connect your **GitHub** account and select your repo.
4. Configure your environment variables by going to **Site Settings > Build & Deploy > Environment** and adding keys from your `.env` file.
5. Click **Deploy Site**. Netlify will build and deploy your portfolio.

---

# Packages Used :package:

|   Used Package List    |
| :--------------------: |
|    @emailjs/browser    |
|  @next/third-parties   |
|         axios          |
|      lottie-react      |
|          next          |
|       nodemailer       |
|         react          |
|       react-dom        |
|   react-fast-marquee   |
| react-google-recaptcha |
|      react-icons       |
|     react-toastify     |
|         sharp          |
|          sass          |
|      tailwindcss       |

---

# FAQ:

1. For those facing the issue of "`next` is not recognized as an internal or external command, operable program or batch file."

Run the following command:

```bash

npm install -g next

```

This installs Next.js globally

then do the usual `npm run dev`

# Contributing :handshake:

Contributions, issues, and feature requests are welcome!

## After working on it locally, the steps to pull and push to repo:

```bash
git pull origin main

git add .

git commit -m "your commit message"

git push origin main
```

---

# Author :technologist:

**Akash Kumar**

- GitHub: [@akashkumar916](https://github.com/akashkumar916)
- LinkedIn: [Akash Kumar](https://www.linkedin.com/in/akashkumar)
- LeetCode: [akash_kumar916](https://leetcode.com/u/akash_kumar916/)

---

# License :page_facing_up:

This project is open source and available under the [MIT License](LICENSE).

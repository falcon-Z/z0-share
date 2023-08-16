# Z0-Share Frontend

This repository contains the frontend code for Z0-Share, a social sharing platform built using the MERN stack.

The application is designed to showcase the capabilities and challenges of working with Modern React and React Server Components using Next.js 13. It employs a wide range of best practices and features related to React Server Components.

> **Note:** The app utilizes bleeding-edge and experimental features of React. These features are subject to change until they stabilize, so this app is intended for exploration rather than production use. It's a playground for modern development practices with Next.js.

## Project Overview

Z0-Share is built using Next.js 13 and leverages the power of AppRouter for routing and navigation. This project has allowed me to experiment with various new features, including Server Actions and other cutting-edge technologies.

## Setup

To get started with the project locally, follow these instructions:

### Clone the Repository

```bash
git clone https://github.com/falcon-Z/z0-share.git
```

### (Optional) Setting up Volta

For Node version management, I recommend using Volta. It automatically detects the version of Node.js used for development. To install Volta, follow these steps:

```bash
curl https://get.volta.sh | bash
```

If you're using Linux or WSL on Windows, you can install Volta using the provided command.

### Install Project Dependencies

```bash
npm install
```

### Setup Environment Variables

As an alternate to AWS S3, the app uses Uploadcare for file storage and retrieval. To set up environment variables, follow these steps:

1. Log in to [Uploadcare](https://uploadcare.com/) and go to Settings → API Keys to get your Public Key and Secret.
2. Create a file named `.env.local` in the root directory of the project.

The following variables are required for the app to run:

```env
API_HOST_URI=http://localhost:3002/api/v1  # API Endpoint to access server APIs
NEXT_PUBLIC_HOST_URI=http://localhost:3000
NEXT_PUBLIC_UPCARE_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_UPCARE_SECRET=YOUR_SECRET_KEY_HERE
```

### Running the App

Before running the app, make sure to start the server. Then, execute the following command:

```bash
npm run dev
```

The app should now be accessible at [http://localhost:3000](http://localhost:3000).

## Project Structure

The components are organized under `src/app/_components`. Each component directory is categorized based on its usage, e.g., the `auth` directory contains components related to authentication, while the `feed` directory contains components for the feed page's UI.

## Project Features

- Seamlessly submit forms using Server Actions.
- Efficiently manage likes with Optimistic Updates.
- Deliver an accessible UI experience with keyboard navigation.
- Facilitate sharing posts using the Browser Share API.
- Allow users to upload files through Uploadcare.
- Enable intuitive drag-and-drop file uploads.
- Present a clean and minimal UI design.
- Embrace challenging colors and design elements for a unique aesthetic.

## Screenshots

### Auth UI
![Authentication UI](https://github.com/falcon-Z/z0-share/assets/28111283/66ad4db7-b138-4458-8580-57fb93c80b7e)

### Feed UI
![Feed UI](https://github.com/falcon-Z/z0-share/assets/28111283/5ed576da-a9b8-418e-b1ab-edad9803ee3c)

### New Post UI
![New Post UI](https://github.com/falcon-Z/z0-share/assets/28111283/f0bf3594-9ed5-49b2-9045-f69b51a4ed0a)
(Uses Route Introspection)

### Post Preview
![Post Preview](https://github.com/falcon-Z/z0-share/assets/28111283/2f09c00c-ed43-4499-857e-7bf91c5bec98)
(Uses Route Introspection)

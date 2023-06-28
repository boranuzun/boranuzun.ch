# Portfolio

This is my portfolio website built using Nuxt.js, Vue.js, Tailwind CSS, and Node.js.

## Description

This portfolio showcases my projects, skills, and experience as a web developer. It is built using Nuxt.js, a powerful Vue.js framework for server-side rendering and static site generation. The responsive design and styling are achieved using Tailwind CSS, a utility-first CSS framework. The backend and server-side functionalities are implemented with Node.js.

## Features

- Responsive and modern UI design
- Project showcase using GitHub GraphQL API
- Skills and experience sections
- Blog section for sharing articles and insights
 

## Installation

1. Clone the repository: `git clone https://github.com/boranuzun/boranuzun.ch.git`
2. Navigate to the project directory: `cd boranuzun.ch`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit: `http://localhost:3000`

## Usage

- Customize the content in the relevant pages under the `pages/` directory.
- Modify the styling and layout in the `components/` directory.
- Add your projects and update the skills and experience sections in the relevant files.

## Setting up GitHub API Access
To enable project showcase using the GitHub GraphQL API, you need to create a .env file in the root directory of your project and define a GITHUB_TOKEN constant with your GitHub API key. Here's how you can do it:

Create a new file in the root directory of your project and name it `.env`.

Open the `.env` file in a text editor and add the following line:


`GITHUB_TOKEN=your_github_api_key`

Replace `your_github_api_key with your actual GitHub API key. If you don't have one, you can generate a new token by following these steps:

- Go to your GitHub account settings.
- Navigate to the "Developer settings" tab.
- Select "Personal access tokens" from the sidebar.
- Click on "Generate new token".
- Give your token a meaningful description.
- Under "Select scopes", make sure the "repo" scope is selected.
- Click on "Generate token".
- Copy the generated token and use it as your `GITHUB_TOKEN`.
- Save the `.env` file.

By adding the `GITHUB_TOKEN` constant to your `.env` file, you can securely store your GitHub API key as an environment variable and access it within your application. Make sure to add the `.env` file to your `.gitignore` file to prevent it from being committed to your repository, as it contains sensitive information.

With the `GITHUB_TOKEN` set up, you can now use it in your code to authenticate with the GitHub API and fetch the necessary data for your project showcase.


## Deployment

1. Build the production-ready assets: `npm run build`
2. Deploy the generated `/dist` directory to your desired hosting platform.

## License

This project is licensed under the [MIT License](LICENSE).

[![Netlify Status](https://api.netlify.com/api/v1/badges/70ae0d14-2c91-4b09-bf79-a4a915c8281d/deploy-status)](https://app.netlify.com/sites/boranuzun/deploys)

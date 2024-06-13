# Personal Website

## Description

My own personal website to advertise my software development career.

## Deployment

This project is deployed on Vercel. It will automatically deployed the latest branch in `main` branch.

URL: <https://fadhilahm.dev/>

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Tech Stacks

### Project-scoped

- Package Management:
  - NPM: default package manager for Javascript.

- CI / CD
  - Github actions is used to implement this. For local development, we're using `act` to simulate it.

### Front End

- TailwindCSS + DaisyUI

  Both combines the easiness of writing css and enough simple component to work from.

## Git Branch Flow

### List of Branch Name Patterns

- `main`
This is the branch that is used to build the website.

- `develop`
This is the branch that you pull from if you want to change/add something. This is mainly used to execute CI processes through github actions.

- `feature/*`
Add something new to the website.

- `fix/*`
Fix something in the website.

- `hotfix/*`
Quickly fix something without triggering all the CIs.

### Typical Git Flow when Developing

```md
`main` --> `develop` --> `feature/*`
   |               |----> `fix/*`
   |-----> `hotfix/*`
```

## Development-related

### Simulating Github Actions Locally

Run `make run_github_actions_local` to simulate every workflow. More details could be found [here](https://nektosact.com/)

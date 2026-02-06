# Cowie Next.js Starter Static Site

This is a Next.js-based **static export** website for Ryan Cowie, to be used as a starter for our projects.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dependencies

- NodeJs >= v22.14.0 (the use of NVM is strongly recommended)
- [Next.js >= 15.3.2](https://nextjs.org/)

TODO: Update the above as needed/add any additional dependencies

## Getting Started

To run the development server locally:

```bash
npm i
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the NextJs site.

## Project Structure

This is NextJs 14.x application built with Next's App Router and Typescript, but deployed as a **static export**.

```
  public/                    # Static assets (img, fonts, videos, pdf, etc.)
  src/
  ├── app/                   # Next.js app directory
  │   ├── layout.tsx         # Root layout
  │   ├── globals.css        # Global CSS file 
  │   ├── variables.css      # Variable CSS file 
  │   └── page.tsx           # Home page
  ├── components/            # Reusable components
  │   ├── Component/
  │   │   ├── Component.tsx
  │   │   ├── Component.module.css
  │   │   ├── ComponentData.js
  │   │   └── ChildComponent/
  │   │   │   ├── ChildComponent.tsx
  │   │   │   ├── ChildComponent.module.css
  │   │   │   └── ChildComponentData.js
  ├── contexts/              # React Context providers (global state)
  ├── customHooks/           # Custom React Hooks (reusable functions, utilized in the same way as native hooks)
  └── .totemrc.yaml          # Config file for totemv3
```

## Environment Variables

TODO: DEV to update (if any)

## Server deployment

### Step 1. Run build command

The application will build using the command below in the different hosting servers (Dev, Staging, Production)

```bash
npm run build
# Run this to ensure no errors are occurring, otherwise deployments will not work
# Errors that can break the build and stop deployments, are as simple as unescapable quotes
```

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the NextJs export build for production.

### Step 2. Test application and fix error

Review the build logs and fix the errors and warnings before committing code.

- Verify no console errors
- Test responsive layouts
- Validate API integrations
- Run lighthouse testing here, especially for page speeds

### Step 3. Commit in branch develop for dev review

You can review the[DEV](https://your-dev-site.com) site at this URL:
https://your-dev-site.com

### Step 4. Merge to branch stage for team review

You can review the [STAGE](https://your-stage-site.com) site at this URL:
https://your-stage-site.com

See 1Password vault **Your-Site** for credentials.

TODO: Update the above with your project's dev and staging servers

## Deploy and Branches

The site follows the MarTech **standard static Environment** deployment strategy:

- `feature-dev` branch
- `develop` branch
- `uat` branch
- `staging` branch
- `prod` branch

Before going to Prod an annotated tag must be implemented in staging branch. Tags **Must** follow semantic versioning: YYYYMMDD.
If multiple releases happen in one day than the time can be added to the end (e.g 20240522T1618).

Include a message which relates to the feature being released with the annotated tag.

## Resources

- [Next.js](https://nextjs.org/)
- [Totem](https://github.com/meltmedia/totem-guides)

TODO: Update the above with your project's specific resources

## Additional NPM Scripts to Note

```bash
npm run pretty
# This will run prettier on all files throughout the project, to keep everything clean and readable
# The standards, such as single quotes are set in the package.json
```

TODO: Update the above with your project's specific npm scripts

TODO: Check out README_TEMPLATE_INSTRUCTIONS.md for more detailed instructions and best practices for React/Next.js projects.  It provides details on the proper file structure that should be followed, the different types of state management, best practices for styles and using css modules, how to properly organize assets, how to create and use SVGs in React, overview for the included starter components, and more!

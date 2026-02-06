# React/Next.js Instruction and Best Practices

## Pages

- App Structure:
  - This application utilizes the modern Next.js app folder structure
- Creating a New Page:
  - To add a new page, create a folder under src/app with the desired page name
  - For example, a folder named sign-up inside app will correspond to the URL <http://localhost:3000/sign-up>
- Folder Structure:
  - Within the new folder, include the following files:
    - **page.tsx:** This file should be a client-side component to leverage various React hooks such as useContext, useState, useEffect, useRef, etc.
    - **page.module.scss:** For styling specific to the page.
    - **layout.tsx:** This file should be a server-side component to enable custom metadata imports using import type { Metadata } from 'next'. This separation allows for page-specific metadata while utilizing essential React hooks
- Home page:
  - Since layout.tsx at the project root is globally applied across all pages and must be a client-side component due to its use of React Context, the page.tsx at the root level needs to be server-side to handle metadata. To achieve this, the home page content is structured within a home folder containing HomeContent.tsx and page.module.css. This content is then imported into the root-level page.tsx
- 404 page:
  - Next.js manages 404 pages by placing a not-found.tsx file at the root of the project. For consistency in code structure and metadata handling, a similar approach as the home page is used. A not-found folder is created at the root, containing NotFoundContent.tsx, which is then imported into the root-level not-found.tsx
- Navigation:
  - For page navigation, use the next/link component with the href attribute pointing to the desired page

## State Management

- Global State Management:
  - The project implements global state management using the React Context API, which is centralized in src/contexts/state.jsx
  - To utilize the context, import the custom hook as follows:
    - `import { useAppContext } from '@/contexts/state'`
  - Destructure the necessary functions within your component to access specific state operations:
    - `const { updateCurrentPage } = useAppContext()`
  - All functions responsible for updating the global state are memoized using the useCallback hook. This optimization ensures that components consuming AppContext only re-render when necessary, preventing performance issues caused by unnecessary re-renders
- React Hooks:
  - React Hooks are extensively employed throughout the application to manage state and side effects efficiently.
- Custom Hooks:
  - Custom hooks can be created as needed and are stored in src/customHooks
  - These functions are commonly reused throughout the project. For instance, consider the useToggle hook as a simple example

## Components and Component File Structure

- This project follows a structured approach for organizing components, ensuring maintainability and clarity. Each component is organized within its own folder and includes the following file types:
  - **Component.tsx**: The main TypeScript file for the component's logic and JSX structure
  - **Component.module.css**: The module CSS file for component-specific styles
  - **ComponentData.js**: (Optional) A JavaScript file containing data relevant to the component
- Folder Structure
  - The folder structure is designed to be hierarchical. If a component has child components, their respective folders and files are nested within the parent component's folder, maintaining the same file structure
- Example Structure, follows a tree like structure:
  - **`src/components/ContentCard/`**:
    - **`ContentCard.module.css`**: Component-specific styles
    - **`ContentCard.tsx`**: Component logic and JSX structure
    - **`ContentCardData.js`**: (Optional) Data or constants for the `ContentCard` component
      - **`ChildComponent/`**:
        - **`ChildComponent.module.css`**: Styles for the child component
        - **`ChildComponent.tsx`**: Logic and JSX for the child component
        - **`ChildComponentData.js`**: (Optional) Data or constants for the child component

## Styles Overview

- This project employs native CSS with advanced features such as nesting and variables, taking advantage of the latest CSS capabilities. The styles are organized to ensure modularity and maintainability across the application
- Style Structure:
  - Component and page Styles:
    - **Module CSS**: Each component and page uses its own `.module.css` file. These styles are scoped to their respective components, ensuring that styles are only applied where intended
    - **Importing Styles**: Styles are imported directly into each component. This approach keeps styles modular and prevents global style conflicts
  - Global Styles:
    - **Global Stylesheet**: A global stylesheet is used for defining common styles that are reused throughout the application. This includes:
    - **Heading Styles**: Common styles for headings `<h1>` through `<h6>`
    - **Button Styles**: Consistent styling for buttons across the app
    - **List Styles**: Shared styles for list elements
    - **Reusable Class Names**: Utility classes such as `.bold`, `.underline`, `.blue`, `.h2`, etc.
    - **Example Usage**: `<h2 className='h3 blue bold'>Your Heading</h2>`
  - Variables:
    - **variables.css:** This file contains all CSS variables used throughout the project. It centralizes color definitions, spacing units, font sizes, and other reusable values. Using CSS variables ensures consistency and makes it easier to update styles across the application
  - Bootstrap Integration:
    - **Grid and Utility Classes:** The project utilizes selected parts of Bootstrap, particularly the grid classes (container, row, col) to implement a 12-column grid system, which significantly reduces the effort required for responsiveness. Additionally, Bootstrap's utility classes like d-none, d-lg-block, etc., are used to streamline responsive design without needing custom CSS for common layout adjustments

## Assets

- Location:
  - All images, videos, PDFs, and other media assets are stored in the public folder
- File Structure:
  - The organization of asset files should reflect the structure of the pages and components they relate to, ensuring consistency and ease of navigation
    - For instance, an image used in the HeroBanner component should be placed in a path like public/img/components/HeroBanner/hero-banner-current-page.png
- Page-Specific Assets:
  - Create dedicated folders within the public directory for images specific to individual pages
- Global Assets:
  - Media files that are used across multiple pages or components should be placed in a global folder for easy access and reuse

## SVGs

- SVG Management: All SVGs used throughout the site are located in src/components/Svgs
- React Integration: These SVGs are structured to be fully compatible with React, allowing you to:
  - Utilize hooks within the SVGs, incorporate functions from Contexts, and more
  - For example, you can create a simple hover effect to dynamically change the SVG color
  - Easily implement CSS transitions, such as changing the path color on hover
- Creating React-Friendly SVGs:
  - To create a new React-compatible SVG, start by duplicating an existing SVG component
  - Obtain the SVG code from your design tool (you can extract this by inspecting the SVG in Chrome or directly from Figma if available)
  - [Convert SVG to JSX using this tool](https://transform.tools/)
  - Replace the placeholder code in the duplicated SVG component with the transformed JSX
  - The SVG component is now ready to be imported and used like any other React component

## Different Components Available in the Starter

- Header Component
  - Overview:
    - The Header is an adaptive component, designed to accommodate the significant differences between desktop and mobile layouts, which makes it more suitable for an adaptive rather than a responsive approach
    - Within the Header, the MainNav and MainNavMobile components are used to handle navigation for desktop and mobile views, respectively. These components are imported and managed within Header.tsx
    - Visibility of these components is controlled using Bootstrap utility classes. For example, the mobile header is shown only on smaller screens using classes like d-block d-lg-none
  - Key Features:
    - Context Integration: The Header demonstrates how effectively React Context can be used to manage the current page state. This allows for dynamic functionality and styling based on the active page
    - Custom Hooks: The useToggle custom hook is utilized within this component, showcasing its reusability and practicality in managing toggle states across different elements
  
- Footer Component
  - A standard, responsive footer is implemented for consistent styling across the site

- HeroBanner Component
  - This component, commonly found at the top of internal pages, currently accepts props for a background image and title. Feel free to extend its functionality as needed

- SignUpCallout Component
  - A versatile callout component used on various pages, designed to guide users to the sign-up page. While it includes a static title and button, you can easily customize it for other purposes by passing props to dynamically adjust the content

- Reference Component
  - This standard component is located at the bottom of internal pages. Note that it includes a data file; be mindful of how the data is exported and imported to ensure only the necessary references are included on each page

- Interstitial Component
  - The Interstitial component serves as a versatile popup solution, easily adaptable for various use cases. Currently, it triggers when a user initiates a new session on any page of the site. If the user is identified as a Healthcare Professional (HCP), they remain on the site; otherwise, they can be redirected to an alternative destination, such as a patient-focused site.
  - This component leverages React Context to manage its visibility state. By maintaining this state in context, the component ensures that the popup remains hidden for the duration of the user’s session, unless the page is refreshed. The component can be further enhanced by introducing props to increase its reusability across different scenarios.

- CompanyLogoLink Component
  - This component illustrates an alternative approach to using a data file compared to the Reference component. The data file is mapped over and rendered dynamically, showcasing a key React concept. While this example uses a local data file, the same approach can be applied to data fetched from an API to generate dynamic content

- Dropdown Component
  - A standard dropdown component with customizable props for dropdownTitle and dropdownContent. A simple animation using max-height is applied to the dropdown content, and the dropdown arrow SVG transitions with a transform: rotate(180deg);
    - this can be easily swapped out for a different icon or design element as needed

- SignUpForm Component
  - A sign-up form that includes fields for first name, last name, email, zip code, and a checkbox. The form includes validation and error handling:
    - Proper email format is required
    - Name fields are mandatory and must contain only letters
    - The zip code field accepts numbers only
    - Additional validations are also included

- StickySubNav Component
  - An internal sticky sub-navigation component that allows users to navigate within a page. It leverages React hooks like useEffect, useRef, and useState to track the user’s position on the page and highlight the corresponding nav item accordingly

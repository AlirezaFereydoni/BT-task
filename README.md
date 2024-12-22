### Option 1

1. Install dependencies
   - `pnpm install`
2. Run project in dev mode
   - `npm run dev`

### Option 2

1. Install docker

- `docker build -t bettermode-task .`
- `docker run -p 3333:3333 bettermode-task`

2. Navigate to http://localhost:3333

### How to access the website

( Read the WIP section in this file for more information)

1. Access your site in bettermode panel after you logged in.
2. Open the browser console and copy the JWT token
3. Head over to the task website and set the cookie with name of `token` and your token.

P.S as long as my token is valid you can use this token

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IllHR09EMnRFREsiLCJuZXR3b3JrSWQiOiJCTlhGanNxSEthIiwibmV0d29ya0RvbWFpbiI6ImJhc2ljLXAyY2w3Z2NoLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiTlVDeGVJVlE3ejRiS3NnRnhSOWVzZXFPMlNKanlKVHp3VjJVMEdjYm5zN2hQQ25iaVQiLCJpYXQiOjE3MzQ4Nzk5MTksImV4cCI6MTczNzQ3MTkxOX0.3F5XJMwD3Kisi0h4C7Hj7017XzA7qELYBV5fB_dj`

### 🧪 Running tests

`npm run test`

## Task Definition

### Objective:

> Build a responsive web application that clones Bettermode’s post list functionality using Vite, React, TypeScript, Tailwind CSS, and integrates GraphQL with Apollo client for data fetching and mutations.

### Important Features:

- #### Post Gallery:

  - Display a paginated post list with a "Show More" button for loading additional posts.
    Post Details:

  - Clicking on a post should open a detailed view on a separate page using React Router.
    Like Button:

  - Implement a "Like" button that updates the like count on both the gallery and detail pages.
    GraphQL Integration:

  - Use GraphQL to fetch posts and manage "like" mutations.
    Authentication:

  - Get an access token by creating a site on Bettermode and logging in. Hardcoding the token is fine, but session management with a login page is a bonus.

### Optional Enhancements (Bonus Points):

- Server-Side Rendering (SSR): Improve initial load time and SEO.
- Session Management: Implement secure login/logout functionality.
- Testing: Add unit or integration tests.

### Tech Stack Requirements:

- Frontend: Vite, React (functional components, hooks), TypeScript, Tailwind CSS.
- Routing: Use React Router for navigation.
- GraphQL/Apollo: For fetching and updating data.

### Presentation Requirements:

- Video Demo (Farsi/English): Show a demo of your app, explain features, walk through your code, and highlight design decisions.
- Code Walkthrough: Explain component structure, state management, and data fetching.

### Submission Guidelines:

- Deadline: Submit the project as a GitHub repo within two weeks.
- README: Include setup instructions and documentation.
- Submission: Share the GitHub link via email.

## Evaluation Criteria

1. Functionality
2. Code quality
3. UI design
4. Effective use of the tech stack
5. Optional enhancements

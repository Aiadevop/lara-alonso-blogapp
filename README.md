This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

npm i next@latest react@latest react-dom@latest eslint-config-next@latest

npx create-next-app@latest

PS C:\Users\Lara\Desktop\CS_DAW\Mybranch\Blog> npx create-next-app@latest
Need to install the following packages:
  create-next-app@13.4.4
Ok to proceed? (y) y
√ What is your project named? ... blogapp
√ Would you like to use TypeScript with this project? ... No / Yes
√ Would you like to use ESLint with this project? ... No / Yes
√ Would you like to use Tailwind CSS with this project? ... No / Yes
√ Would you like to use `src/` directory with this project? ... No / Yes
√ Use App Router (recommended)? ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes
Creating a new Next.js app in C:\Users\Lara\Desktop\CS_DAW\Mybranch\Blog\blogapp.

Using npm.

Installing dependencies:
- react
- react-dom
- next
- tailwindcss
- postcss
- autoprefixer
- eslint
- eslint-config-next

When finish your installation: cd projectname
npm run dev

> blogapp@0.1.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000

if you enter in http://localhost:3000 you have your basic page.


How make the debugger??

Create a new folder .vscode
Create in this folder launch.json

{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch",
            "program": "${workspaceFolder}/pages/index.js",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        },
    
        {
            "name": "Attach",
            "type": "node",
            "request": "attach",
            "port": 9229
        }
    ]  
  }

  In package.json

    "scripts": {
    "dev": "cross-env NODE_OPTIONS='--inspect=0.0.0.0:9229'next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },

  and install npm install cross-env

  When you click debugger and put red point you stop in this place and look your code.

  page.js is your principal page

  If you want create new routes you create a new folder with a name of the route, for example blog and create a page.js file in this folder.

  The route is http://localhost:3000/blog






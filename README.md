# Book Search and Bookshelf Application

This project is a React application that allows users to search for books using the Open Library API and add them to their personal bookshelf. The application uses Tailwind CSS for styling.

## Features

- Real-time book search using the Open Library API
- Add books to a personal bookshelf
- Remove books from the bookshelf
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/book-search-app.git

2. Navigate to the Project Directory

Change to the project directory:

   cd book-search-app

3. Install Dependencies

Install the required dependencies using npm or yarn:

  npm install

4. Configure Tailwind CSS

If you haven't already, configure Tailwind CSS by following these steps:

Step 1: Install Tailwind CSS via npm

bash

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

Step 2: Create Tailwind and PostCSS Configuration Files

npx tailwindcss init -p

This will create a tailwind.config.js and postcss.config.js file.

Step 3: Add Tailwind to your CSS

In your src/index.css file, add the following lines:

css

@tailwind base;
@tailwind components;
@tailwind utilities;

Step 4: Configure PurgeCSS (optional for production)

In tailwind.config.js, configure the purge option to remove unused CSS in production:

javascript

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
Running the Application

Development

To run the application in development mode, use the following command:

npm start

or

yarn start

This will start the development server and open the application in your default web browser. The application will automatically reload if you make changes to the source code.
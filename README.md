# Syntax Swapper

This project is a React-based web application that allows users to compare syntax between different programming languages. It provides a simple interface to input code snippets and see their equivalent in other languages.

## Features

-   **Syntax Comparison:** Easily compare syntax between JavaScript, Python, C++, Java, Go, PHP, C#, and TypeScript.
-   **Language Selection:** Choose the source and target languages from a dropdown list.
-   **Real-time Conversion:** See the converted syntax in real-time.
-   **User-Friendly Interface:** Clean and intuitive design for easy navigation.
-   **Language Logos:** Visual representation of selected languages with their logos.
-   **PixelCard Component:** Stylish card components to display language selections.
-   **Animation:** Bounce animation on logo change for better UX.

## Technologies Used

-   **React:** JavaScript library for building user interfaces.
-   **Next.js:** React framework for server-side rendering and static site generation.
-   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-   **Image (Next.js):** Optimized image component for Next.js.
-   **useState and useEffect (React Hooks):** For managing component state and side effects.

## Getting Started

### Prerequisites

-   Node.js (>= 18.0.0)
-   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/GodzK/SyntaxSwap.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd syntaxswapper
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## Usage

1.  click start Select the source language from the left Card.
2.  Select the target language from the right Card.
3.  Enter the code snippet in the input textarea.
4.  Click the "Convert" button.
5.  The converted syntax will be displayed in the output textarea.
6.  To change languages click the language logos.

# Startup Idea Validator

A simple web app built with **Next.js** and **Google Gemini API** that helps validate startup ideas. Users can enter their idea, and the app provides feedback on its viability, target market, and monetization strategies.

## Features

- **Idea Validation**: Get instant feedback on your startup idea.
- **Viability Analysis**: Assess the potential of your idea.
- **Market Insights**: Learn about potential audiences and target markets.
- **Monetization Tips**: Receive monetization strategies for your idea.

## Tech Stack

- **Frontend**: Next.js (React)
- **Backend**: API routes in Next.js
- **Generative AI**: Google Gemini API for idea validation

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/startup-validator.git
   ```

2. Navigate to the project folder:

   ```bash
   cd startup-validator
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your Gemini API Key:

   ```plaintext
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to start using the app.

## Deployment

This app can be deployed easily on platforms like [Vercel](https://vercel.com). Simply push your code to a GitHub repository, link it to Vercel, and Vercel will handle the deployment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

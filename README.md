# AI Course Generator

AI Course Generator is a platform that allows users to easily create
and generate educational courses using artificial intelligence. By simply entering course details like name, duration, number of chapters, and specifying if videos are included, Gemeni AI generates the entire course structure along with relevant YouTube videos for each chapter.

## Features

- **User Registration**: Users can register and create their own accounts.

- **Course Creation**: Users can create a course by providing a course name, duration, number of chapters, and the option to include videos.
- **AI-Generated Courses**: The platform uses AI to generate a complete course structure based on user input.
- **YouTube Video Integration**: The AI automatically attaches relevant YouTube videos to each chapter of the course.
- **Image Storage**: Course-related images are stored in Firebase.
- **Frontend Design**: The frontend is built using the Shadcn UI library to provide a modern and responsive interface.

## Tech Stack

- **Next.js**

- **PostgreSQL**
- **Firebase**
- **Drizzle ORM**
- **Shadcn UI Library**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bhataasim1/ai-content-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-content-generator
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Set up the environment variables:
   Create a `.env` file in the root directory and add the following values:
   ```bash
    NEXT_PUBLIC_HOST_URL="http://localhost:3000"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="Your-key"
    CLERK_SECRET_KEY="Your-key"
    NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
    NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
    NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY="Your-key"
    NEXT_PUBLIC_DRIZZLE_DATABASE_URL="Your-database-url"
    NEXT_PUBLIC_FIREBASE_API_KEY="your-key"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="project-id"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
    NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="your-measurement-id"
    NEXT_PUBLIC_YOUTUBE_API_KEY="your-youtube-api-key"
   ```
5. Run the development server:
   `bash
   npm run dev
6. Visit`http://localhost:3000` to view the application.

## Open to Contributions

AI Course Generator is an open-source project and we welcome contributions from the community. If you would like to contribute to the project, please follow the steps below:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

We look forward to your contributions!

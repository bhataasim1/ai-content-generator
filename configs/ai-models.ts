import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { BaseEnvironment } from "./BaseEnvironment";

const env = new BaseEnvironment();
export const MODEL = "gemini-1.5-flash";

const genAI = new GoogleGenerativeAI(env.GOOGLE_GEMENI_API_KEY);

const model = genAI.getGenerativeModel({
  model: MODEL,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const generateCourseLayout = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a course tutorial on following details with field name, description, along with the chapter name about and duration: Category 'programming' Topic 'python' Level 'basic' Duration '1 hour' chapters '5' in JSON format.\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "category": "programming",\n  "topic": "python",\n  "level": "basic",\n  "duration": "1 hour",\n  "chapters": [\n    {\n      "chapter_name": "Introduction to Python",\n      "description": "This chapter covers the basics of Python programming, including data types, variables, operators, and control flow.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapter_name": "Working with Data Structures",\n      "description": "This chapter explores fundamental data structures like lists, tuples, dictionaries, and sets.",\n      "duration": "20 minutes"\n    },\n    {\n      "chapter_name": "Functions and Modules",\n      "description": "This chapter teaches how to define and use functions, as well as import and utilize modules.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapter_name": "Loops and Iteration",\n      "description": "This chapter focuses on different looping mechanisms like \'for\' and \'while\' loops to iterate over data.",\n      "duration": "10 minutes"\n    },\n    {\n      "chapter_name": "Basic Input and Output",\n      "description": "This chapter covers how to take user input and display output using Python.",\n      "duration": "10 minutes"\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

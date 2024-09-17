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
          text: '```json\n{\n  "category": "programming",\n  "topic": "python",\n   "description": "Python is a high-level, general-purpose programming language known for its simplicity, readability, and versatility. Its widely used for web development, data analysis, machine learning, and automation tasks.",\n "level": "basic",\n  "duration": "1 hour",\n  "chapters": [\n    {\n      "chapter_name": "Introduction to Python",\n      "description": "This chapter covers the basics of Python programming, including data types, variables, operators, and control flow.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapter_name": "Working with Data Structures",\n      "description": "This chapter explores fundamental data structures like lists, tuples, dictionaries, and sets.",\n      "duration": "20 minutes"\n    },\n    {\n      "chapter_name": "Functions and Modules",\n      "description": "This chapter teaches how to define and use functions, as well as import and utilize modules.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapter_name": "Loops and Iteration",\n      "description": "This chapter focuses on different looping mechanisms like \'for\' and \'while\' loops to iterate over data.",\n      "duration": "10 minutes"\n    },\n    {\n      "chapter_name": "Basic Input and Output",\n      "description": "This chapter covers how to take user input and display output using Python.",\n      "duration": "10 minutes"\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const generateCourseChapters = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Explain the concepts in detail on Topic: Python Basics, Chapter: Introduction to python, in JSON Format with list of array with fields as Title, explination of given chapter in detail, code examples (code field <precode> format) if applicable.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "title": "What is Python?",\n    "explanation": "Python is a high-level, interpreted, general-purpose programming language. It\'s known for its readability, versatility, and extensive libraries, making it suitable for a wide range of applications, from web development and data science to scripting and automation.",\n    "code_examples": []\n  },\n  {\n    "title": "Why Python?",\n    "explanation": "Python\'s popularity stems from several key advantages:\\n\\n* **Readability:** Python\'s syntax is designed to be clear and concise, resembling natural language, making it easier to learn and understand.\\n* **Versatility:** Python is widely used in various domains, including web development, data analysis, machine learning, scientific computing, and more.\\n* **Extensive Libraries:** Python offers a vast collection of pre-built libraries that provide ready-to-use tools for specific tasks, saving developers time and effort.\\n* **Large Community:** Python boasts a vibrant and active community, providing ample resources, support, and contributions.\\n* **Beginner-Friendly:** Python\'s simplicity and focus on readability make it an excellent choice for beginners entering the world of programming.",\n    "code_examples": []\n  },\n  {\n    "title": "Running Python Code",\n    "explanation": "To execute Python code, you can use the following methods:\\n\\n* **Interactive Interpreter:** This mode allows you to type and run Python commands directly in the console. You can access it by typing `python` in your terminal or command prompt.\\n* **Script Files:** Python code can be saved in files with the `.py` extension. To run a script file, you can use the `python` command followed by the file name in your terminal or command prompt.\\n* **Integrated Development Environments (IDEs):** IDEs offer a comprehensive environment for coding, debugging, and running Python code. Popular IDEs include PyCharm, VS Code, and Spyder.",\n    "code_examples": [\n      {\n        "code": "<precode>print(\'Hello, world!\')</precode>"\n      }\n    ]\n  },\n  {\n    "title": "Basic Data Types",\n    "explanation": "Python supports various data types to represent different kinds of data:\\n\\n* **Integers (int):** Whole numbers without decimal points. Example: 10, -5, 0\\n* **Floating-point Numbers (float):** Numbers with decimal points. Example: 3.14, -2.5, 1.0\\n* **Strings (str):** Sequences of characters enclosed in single (\' \') or double (\\" \\") quotes. Example: \'Hello\', \\"Python\\"\\n* **Booleans (bool):** Logical values representing True or False. Example: True, False",\n    "code_examples": [\n      {\n        "code": "<precode>number = 10  # Integer\\npi = 3.14  # Float\\nmessage = \'Hello, Python!\'  # String\\nis_active = True  # Boolean</precode>"\n      }\n    ]\n  },\n  {\n    "title": "Variables",\n    "explanation": "Variables act as containers that store data. In Python, you can assign values to variables using the assignment operator (=).",\n    "code_examples": [\n      {\n        "code": "<precode>name = \'Alice\'\\nage = 25\\nheight = 1.75</precode>"\n      }\n    ]\n  },\n  {\n    "title": "Operators",\n    "explanation": "Operators are symbols that perform specific operations on values or variables.\\n\\n* **Arithmetic Operators:**\\n    * `+` (Addition)\\n    * `-` (Subtraction)\\n    * `*` (Multiplication)\\n    * `/` (Division)\\n    * `%` (Modulo - Remainder after division)\\n    * `**` (Exponentiation)\\n    * `//` (Floor division - Rounds down to the nearest integer)\\n\\n* **Comparison Operators:**\\n    * `==` (Equal to)\\n    * `!=` (Not equal to)\\n    * `>` (Greater than)\\n    * `<` (Less than)\\n    * `>=` (Greater than or equal to)\\n    * `<=` (Less than or equal to)\\n\\n* **Logical Operators:**\\n    * `and` (Logical AND)\\n    * `or` (Logical OR)\\n    * `not` (Logical NOT)",\n    "code_examples": [\n      {\n        "code": "<precode>result = 10 + 5  # Addition\\nremainder = 10 % 3  # Modulo\\npower = 2 ** 3  # Exponentiation\\nis_equal = 5 == 5  # Equal to\\nis_greater = 10 > 5  # Greater than\\nis_true = True and True  # Logical AND</precode>"\n      }\n    ]\n  },\n  {\n    "title": "Input and Output",\n    "explanation": "Python provides functions for interacting with the user:\\n\\n* **Input:** The `input()` function prompts the user for input and returns the entered value as a string.\\n* **Output:** The `print()` function displays text or values to the console.",\n    "code_examples": [\n      {\n        "code": "<precode>name = input(\'Enter your name: \')  # Input\\nprint(\'Hello,\', name + \'!\')  # Output</precode>"\n      }\n    ]\n  }\n]\n```',
        },
      ],
    },
  ],
});

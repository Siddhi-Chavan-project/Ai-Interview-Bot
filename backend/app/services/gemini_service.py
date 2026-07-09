import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_questions(role, experience, difficulty, technology, number_of_questions):

    prompt = f"""
Generate {number_of_questions} interview questions.

Role: {role}
Experience: {experience}
Difficulty: {difficulty}
Technologies: {', '.join(technology)}

Return only the questions as a numbered list.
"""

    response = model.generate_content(prompt)

    questions = []

    for line in response.text.split("\n"):
        line = line.strip()

        if line:
            # Remove numbering like "1. ", "2. ", etc.
            if ". " in line:
                line = line.split(". ", 1)[1]

            questions.append(line)

    return questions
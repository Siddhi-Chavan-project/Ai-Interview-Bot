import google.generativeai as genai
import os
import json
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def evaluate_answer(question, answer):

    prompt = f"""
You are an expert technical interviewer.

Question:
{question}

Candidate Answer:
{answer}

Evaluate the answer.

Return ONLY valid JSON in this format:

{{
    "score": 8,
    "feedback": "Your feedback here"
}}

Do not use markdown.
Do not use ```json.
Return only the JSON object.
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    # Remove markdown if Gemini still returns it
    text = text.replace("```json", "").replace("```", "").strip()

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {
            "score": 0,
            "feedback": "Unable to parse AI response.",
            "raw_response": text
        }
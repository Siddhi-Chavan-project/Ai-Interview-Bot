# Intervoro AI 🤖
### AI-Powered Interview Preparation and Personalized Feedback

Intervoro AI is an AI-powered interview preparation web application designed to help candidates practise technical interviews, evaluate their answers, identify knowledge gaps, and improve their performance through personalized feedback and targeted practice.

The project is developed as part of an MCA research project titled **“A Large Language Model-Based Approach for Automated Interview Answer Evaluation and Personalized Feedback.”**

## 🎯 Objectives

- Generate interview questions based on the candidate's role, experience, difficulty level, and selected technologies.
- Evaluate interview answers using Generative AI.
- Provide scores and personalized feedback for individual answers.
- Identify weak areas and help candidates practise the concepts they need to improve.
- Support concept understanding and application through the planned Concept Transfer Verification Engine.

## ✨ Features

### 1. User Authentication
- User registration and login.
- JWT-based authentication.
- Protected interview functionality.

### 2. AI-Based Interview Generation
- Generate technical interview questions dynamically.
- Customize interviews by job role, experience, difficulty, and technology.
- Conduct interviews with one question at a time.

### 3. Intelligent Answer Evaluation
- Evaluate submitted answers using Google's Gemini AI model.
- Generate scores and relevant feedback.
- Store interview responses and evaluation results.

### 4. Personalized Feedback
- Identify strengths and areas requiring improvement.
- Highlight weak concepts based on interview performance.
- Provide feedback to guide further learning.

### 5. Targeted Practice
- Practise topics identified as weaknesses.
- Focus on improving understanding of concepts that require additional attention.

### 6. Interview Results and History
- View interview performance and evaluation results.
- Provide access to interview history through the dashboard.

### 7. Concept Transfer Verification Engine
A research-oriented feature designed to investigate whether candidates can independently apply a previously practised concept in a new scenario.

The intended workflow includes:
- Identifying a weak concept.
- Explaining the missing concept.
- Generating a targeted practice question.
- Testing the same concept in a different context.
- Comparing performance across the original and transfer questions.

This feature aims to explore conceptual understanding beyond answering familiar questions. Its complete workflow and effectiveness require further validation.

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js, Vite, JavaScript |
| UI and Styling | HTML, CSS |
| API Communication | Axios |
| Frontend Routing | React Router |
| Backend | Python, FastAPI |
| ASGI Server | Uvicorn |
| Database | MongoDB / MongoDB Atlas |
| Authentication | JSON Web Tokens (JWT) |
| Generative AI | Google Gemini API |
| AI Model | Gemini 2.5 Flash |
| Version Control | Git and GitHub |

## 🏗️ System Architecture

Intervoro AI follows a full-stack architecture in which the React frontend communicates with the FastAPI backend through REST APIs. The backend handles authentication, interview generation, answer submission, evaluation, and database operations.

The Gemini API is used for AI-powered question generation and answer evaluation, while MongoDB stores application data.

```text
                INTERVORO AI
                     |
          React.js + Vite Frontend
                     |
             Axios / REST APIs
                     |
              FastAPI Backend
              /      |       \
             /       |        \
       MongoDB    Gemini AI    JWT
       Database   Evaluation   Auth
                     |
          Scores and Personalized
                  Feedback
                     |
             Targeted Practice
```

## 📂 Project Structure

The following is a representative structure. Actual filenames may vary depending on the current repository.

```text
Intervoro-AI/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── index.html
│   └── ...
│
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the project:

- Python and pip
- Node.js and npm
- Git
- MongoDB Atlas account or a compatible MongoDB instance
- Google Gemini API key

## 🚀 Installation and Setup

### 1. Clone the repository

Replace the placeholder with the actual GitHub repository URL.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Intervoro-AI
```

### 2. Configure the backend

Open a terminal in the project root:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Install the backend dependencies:

```bash
pip install -r requirements.txt
```

If `requirements.txt` is not present, install the dependencies listed in your project's setup instead.

### 3. Configure environment variables

Create a `.env` file inside the backend directory and configure the required variables:

```env
MONGO_URI=your_mongodb_connection_string
DATABASE_NAME=your_database_name
JWT_SECRET=your_secure_secret_key
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
GEMINI_API_KEY=your_gemini_api_key
```

Replace the example values with your actual configuration. Keep `.env` out of version control and never publish API keys, database credentials, or JWT secrets on GitHub.

### 4. Start the backend server

From the backend directory, run:

```bash
uvicorn main:app --reload --port 8000
```

Backend URL:

`http://localhost:8000`

Interactive API documentation:

`http://localhost:8000/docs`

### 5. Configure and start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

`http://localhost:5173`

Ensure the frontend's Axios configuration points to the running backend and that the backend CORS settings allow the frontend origin.

## 🔄 Application Workflow

1. Register or log in to the application.
2. Select an interview role, experience level, difficulty, and technologies.
3. Generate a customized interview.
4. Answer questions one at a time.
5. Submit answers for AI-based evaluation.
6. Review scores and personalized feedback.
7. Identify weak areas and access targeted practice.
8. Explore concept-transfer testing as the feature becomes fully implemented and validated.

## 🔬 Research Focus

**Research title:** A Large Language Model-Based Approach for Automated Interview Answer Evaluation and Personalized Feedback.

The research explores the use of Large Language Models (LLMs) to automate interview answer evaluation and provide individualized feedback.

The primary research objectives are to investigate:

- The usefulness of Generative AI for evaluating technical interview answers.
- The value of combining numerical scores with explanatory feedback.
- The identification of knowledge gaps from candidate responses.
- The potential of targeted practice to support learning.
- Whether transfer questions can help assess a candidate's ability to apply concepts in unfamiliar scenarios.

The Concept Transfer Verification Engine represents a research direction for examining conceptual application rather than relying exclusively on performance on familiar questions. Its effectiveness should be established through systematic testing and evaluation.

## 🔮 Future Enhancements

- Voice-based interview practice.
- AI-powered resume analysis.
- Detailed performance analytics and progress tracking.
- Expanded interview history and reporting.
- Improved evaluation consistency and validation.
- More comprehensive concept-transfer assessments.
- Deployment and accessibility improvements.

## 🔐 Security Considerations

- Store sensitive credentials in environment variables.
- Never commit `.env` files or API keys.
- Protect private endpoints using JWT authentication.
- Configure CORS for trusted frontend origins.
- Validate incoming requests and handle API errors appropriately.

## 👩‍💻 Author

**Siddhi Chavan**

Master of Computer Applications (MCA)

**Project:** Intervoro AI — AI-Powered Interview Preparation and Personalized Feedback

## 📄 License

This project is developed for academic and research purposes. A formal open-source license can be added if the project is intended for public reuse.

---

*Intervoro AI — Practise smarter. Understand deeper. Improve continuously.*

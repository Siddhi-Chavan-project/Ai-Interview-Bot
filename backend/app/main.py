from fastapi import FastAPI

from app.routes.auth import router as auth_router
from app.routes.interview import router as interview_router



app = FastAPI(
    title="AI Interview Bot API",
    version="1.0.0"
)


# Authentication APIs
app.include_router(
    auth_router,
    prefix="/api/auth"
)


# Interview APIs
app.include_router(
    interview_router,
    prefix="/api/interview"
)


# Report APIs



@app.get("/")
def home():
    return {
        "message": "AI Interview Bot API Running"
    }
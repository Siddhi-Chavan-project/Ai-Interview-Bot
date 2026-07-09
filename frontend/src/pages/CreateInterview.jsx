import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function CreateInterview() {

    const navigate = useNavigate();

    const [interview, setInterview] = useState({
        role: "",
        experience: "",
        difficulty: "",
        technology: "",
        number_of_questions: 5
    });

    const handleChange = (e) => {
        setInterview({
            ...interview,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const payload = {
                role: interview.role,
                experience: interview.experience,
                difficulty: interview.difficulty,
                technology: interview.technology
                    .split(",")
                    .map((tech) => tech.trim()),
                number_of_questions: Number(interview.number_of_questions)
            };

            const res = await API.post(
                "/interview/create",
                payload
            );

            alert("Interview Created Successfully");

            console.log(res.data);

            navigate(`/interview/${res.data.interview_id}`);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.detail ||
                "Failed to create interview"
            );

        }

    };

    return (

        <div>

            <h1>Create Interview</h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="role"
                    placeholder="Role (Java Developer)"
                    value={interview.role}
                    onChange={handleChange}
                    required
                />

                <input
                    name="experience"
                    placeholder="Experience (0-1 Years)"
                    value={interview.experience}
                    onChange={handleChange}
                    required
                />

                <select
                    name="difficulty"
                    value={interview.difficulty}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <input
                    name="technology"
                    placeholder="Java, Spring Boot, MySQL"
                    value={interview.technology}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="number_of_questions"
                    value={interview.number_of_questions}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    required
                />

                <button type="submit">
                    Start Interview
                </button>

            </form>

        </div>

    );
}

export default CreateInterview;
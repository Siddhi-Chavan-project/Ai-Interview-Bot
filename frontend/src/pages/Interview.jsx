import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

function Interview() {

    const { interviewId } = useParams();

    const [interview, setInterview] = useState(null);

    useEffect(() => {

        const fetchInterview = async () => {

            try {

                const res = await API.get(
                    `/interview/${interviewId}`
                );

                setInterview(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchInterview();

    }, [interviewId]);

    if (!interview) {
        return <h2>Loading...</h2>;
    }

    return (

        <div>

            <h1>{interview.role} Interview</h1>

            <h3>Difficulty: {interview.difficulty}</h3>

            <h3>Experience: {interview.experience}</h3>

            <hr />

            {interview.questions.map((question, index) => (

                <div key={index}>

                    <h3>
                        Question {index + 1}
                    </h3>

                    <p>{question}</p>

                </div>

            ))}

        </div>

    );

}

export default Interview;
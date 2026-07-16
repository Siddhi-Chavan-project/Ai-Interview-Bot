import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import "../styles/Interview.css";


function Interview() {

    const { interview_id } = useParams();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchInterview = async () => {

            try {

                const res = await API.get(
                    `/interview/${interview_id}`
                );

                setQuestions(res.data.questions);

            } catch(error) {

                console.log(error);

                alert("Failed to load interview");

            } finally {

                setLoading(false);

            }

        };


        fetchInterview();

    }, [interview_id]);



    const handleAnswer = (index, value) => {

        setAnswers({
            ...answers,
            [index]: value
        });

    };



    const submitInterview = async () => {

        try {

            const payload = {

                interview_id: interview_id,

                answers: questions.map((question,index)=>({

                    question: question,
                    answer: answers[index] || ""

                }))

            };


            const res = await API.post(
                "/interview/answer",
                payload
            );


            alert("Answers submitted successfully");

            console.log(res.data);


        } catch(error){

            console.log(error);

            alert("Submission failed");

        }

    };



    if(loading){

        return <h2 className="loading">
            Loading Interview...
        </h2>

    }



    return (

        <div className="page-container">

            <div className="interview-container">


                <h1>
                    AI Interview Session
                </h1>


                {
                    questions.map((question,index)=>(

                        <div 
                        className="question-card"
                        key={index}
                        >

                            <h3>
                                Question {index+1}
                            </h3>


                            <p>
                                {question}
                            </p>


                            <textarea

                            placeholder="Write your answer here..."

                            value={
                                answers[index] || ""
                            }

                            onChange={(e)=>
                                handleAnswer(
                                    index,
                                    e.target.value
                                )
                            }

                            />


                        </div>

                    ))
                }



                <button
                onClick={submitInterview}
                className="submit-btn"
                >
                    Submit Interview
                </button>


            </div>

        </div>

    );

}


export default Interview;
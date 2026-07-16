import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import "../styles/Result.css";


function Result() {

    const { interview_id } = useParams();

    const [result, setResult] = useState(null);


    useEffect(() => {

        const fetchResult = async () => {

            try {

                const res = await API.get(
                    `/interview/result/${interview_id}`
                );

                setResult(res.data);


            } catch(error) {

                console.log(error);

                alert("Failed to load result");

            }

        };


        fetchResult();


    }, [interview_id]);



    if(!result){

        return (
            <h2 className="loading">
                Generating AI Report...
            </h2>
        );

    }



    return (

        <div className="page-container">


            <div className="result-container">


                <h1>
                    Interview Performance Report
                </h1>



                <div className="score-card">

                    <h2>
                        Grade : {result.grade}
                    </h2>

                    <p>
                        Average Score :
                        {result.average_score}/10
                    </p>

                    <p>
                        Total Score :
                        {result.total_score}
                    </p>

                </div>



                <div className="feedback-grid">


                    <div className="feedback-card">

                        <h3>
                            💪 Strengths
                        </h3>

                        {
                            result.strengths.map(
                                (item,index)=>(
                                    <p key={index}>
                                        {item}
                                    </p>
                                )
                            )
                        }

                    </div>




                    <div className="feedback-card">

                        <h3>
                            📈 Areas to Improve
                        </h3>

                        {
                            result.weaknesses.map(
                                (item,index)=>(
                                    <p key={index}>
                                        {item}
                                    </p>
                                )
                            )
                        }

                    </div>


                </div>




                <h2 className="review-title">
                    Question Review
                </h2>



                {
                    result.answers.map(
                        (item,index)=>(

                        <div 
                        className="answer-card"
                        key={index}
                        >

                            <h3>
                                Question {item.question_number}
                            </h3>


                            <p>
                                <b>
                                Question:
                                </b>
                                {" "}
                                {item.question}
                            </p>


                            <p>
                                <b>
                                Your Answer:
                                </b>
                                {" "}
                                {item.answer}
                            </p>


                            <p>
                                <b>
                                Score:
                                </b>
                                {" "}
                                {item.score}/10
                            </p>


                            <p>
                                <b>
                                AI Feedback:
                                </b>
                                {" "}
                                {item.feedback}
                            </p>


                        </div>

                        )
                    )
                }



            </div>


        </div>

    );

}


export default Result;
import React, { useState, useEffect } from "react";
import { getQuizByUser } from "../services/apiServices";
import "./ListQuiz.scss";

const ListQuiz = (props) => {
  const [arrQuiz, setArrQuiz] = useState([]);

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    try {
      const res = await getQuizByUser();
      setArrQuiz(res.DT);
      console.log("🚀 ~ res.DT", res.DT);
    } catch (error) {
      console.log("🚀 ~ error", error);
    }
  };

  return (
    <div className="quiz container" style={{ marginTop: 74 }}>
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((quiz, idx) => (
          <div
            className="card quiz-item"
            key={`quiz-${idx}`}
            style={{ width: " 18rem" }}
          >
            <img
              src={`data:image/png;base64,${quiz.image}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Quiz {idx + 1}</h5>
              <p className="card-text">{quiz.description}</p>
              <button className="btn btn-primary">Start now</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListQuiz;

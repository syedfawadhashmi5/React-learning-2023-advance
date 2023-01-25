import React, { useState, useEffect } from "react";
import "./Quiz_app.css";

function Quiz_app() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showTimeUp, setShowTimeUp] = useState(false);
  const [selectedAnswer, setAnswerSelected]=useState(false);
  const [correctAnswers, setCorrectAnswers]=useState(0);
  const [incorrectAnswers, setIncorrectAnswers]=useState(0);
  const [userAnswers, setUserAnswers]=useState([]);

  const [questions] = useState([
    {
      questionText: "What was the old name of PIA?",
      answerOptions: [
        "Orient Airways",
        "New Air Dublin",
        "Madrid AirLine",
        "Paris Line",
      ],
      answer: "Orient Airways",
    },
    {
      questionText:
        "What official name was given to Pakistan in 1956 constitution?",
      answerOptions: [
        "New Pakistan",
        "Old Pakistan",
        "Pakistan Moment",
        "Islamic Republic",
      ],
      answer: "Islamic Republic",
    },
    {
      questionText: "How many days are in September",
      answerOptions: ["28", "29", "30", "31"],
      answer: "28" 
    },
    {
      questionText: "Which are the popular rivers of Baluchistan?",
      answerOptions: ["1", "64", "742", "0"],
      answer: "742",
    },
    {
      questionText: "Which of these is not an planet?",
      answerOptions: ["Earth", "Jupitor", "Mars", "Florida"],
      answer: "Florida",
    },
    {
      questionText: "Question 6?",
      answerOptions: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      answer: "Answer 2",
    },
    {
      questionText: "Question 7?",
      answerOptions: ["Answer 11", "Answer 12", "Answer 13", "Answer 14"],
      answer: "Answer 13",
    },
    {
      questionText: "Question 8?",
      answerOptions: ["Answer 21", "Answer 22", "Answer 23", "Answer 24"],
      answer: "Answer 24",
    },
    {
      questionText: "Question 9?",
      answerOptions: ["Answer 31", "Answer 32", "Answer 33", "Answer 34"],
      answer: "Answer 31",
    },
    {
      questionText: "Question 10?",
      answerOptions: ["Answer 41", "Answer 42", "Answer 43", "Answer 44"],
      answer: "Answer 43",
    },
  ]);



  useEffect(() => {
    if(timeLeft > 0 && !showScore){
      const Timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime -1)
        return clearTimeout(Timer);
      }, 1000);
    }else if (timeLeft === 0){
      setShowTimeUp(true);
      setShowScore(true);
    }
  }, [timeLeft, showScore]);

  const handleAnswerOptionClick = (isCorrect, selectedAnswer, incorrect) => {
    setAnswerSelected(true);
    if(isCorrect){
      setScore(score + 5);
      setCorrectAnswers(correctAnswers + 1);
      setAnswerSelected(true);
    }else {
      setIncorrectAnswers(incorrectAnswers +1);
    }
    setUserAnswers([...userAnswers, selectedAnswer]);
  }

  return (
    <div className="quiz_main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {showTimeUp}
            <div className="quiz-question">
              <div className="score">
                <h2>Score: {score}</h2>
                <h3>Time Left : {timeLeft}</h3>
              </div>
              <div className="question-count mt-4">
                <h3>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </h3>
              </div>
              <div className="question-text mt-3">
                <h4>{questions[currentQuestion].questionText}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="answer-options">
              
              {
                questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <div key={index} className="ans_button_main">
                    <button className={`answer-option ${
                      userAnswers.includes(answerOption)
                      ? questions[currentQuestion].answer === answerOption
                      ? "correct"
                      : "incorrect"
                      : " "
                    }`}
                    disabled={selectedAnswer}
                    onClick={() => {
                      handleAnswerOptionClick(
                        answerOption === questions[currentQuestion].answer,
                        answerOption
                      );
                      setAnswerSelected(true);
                    }}
                    >
                    {answerOption}
                    </button>
                  </div>
                ))
              }
            </div>
            <div className="buttons">
              {currentQuestion > 0 && (
                <button
                  className="previous-button"
                  onClick={() =>
                    setCurrentQuestion((prevQuestion) => prevQuestion - 1)
                  }
                >
                  Previous
                </button>
              )}
              {selectedAnswer && (
                  <button
                    className={`next-button ${
                      currentQuestion === questions.length - 1
                        ? "submit-button"
                        : ""
                    }`}
                    onClick={() => {
                      if (currentQuestion === questions.length - 1) {
                        setShowScore(true);
                      } else {
                        setAnswerSelected(false);
                        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
                      }
                    }}
                  >
                    {currentQuestion === questions.length - 1
                      ? "Submit"
                      : "Next"}
                  </button>
              )}
              <button
                className="quit-button"
                onClick={() => setShowScore(true)}
              >
                Quit
              </button>
            </div>
            {showTimeUp && (
              <div className="time-up">
                <p>Time's up!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {showScore && (
        <div className="results">
          <div className="result_wapper">
          <h2>Results</h2>
          <p>Total Marks: {questions.length}</p>
          <p>Obtained Marks: {score}</p>
          <p>Percentage: {(score / questions.length) * 100}%</p>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz_app;

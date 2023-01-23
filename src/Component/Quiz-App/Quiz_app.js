import React,{useState} from "react";

function Quiz_app() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];

const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
};

console.log(questions)

  return (
    <div className="quiz_main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="quiz_question">
              <div className="score">
                <h2>score: {score}</h2>
              </div>
              <div className="question_count mt-4">
                <h3><span>Question {currentQuestion + 1}</span>/{questions.length}</h3>
              </div>
              <div className="question_number mt-3">
                <h4>{questions[currentQuestion].questionText}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Answer_main">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button>{answerOption.answerText}</button>
						))}
              <div className="btn_mian">
                <button>Quit</button>
                <button  onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions)}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz_app;

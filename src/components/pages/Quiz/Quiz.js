import React, {useState, useContext} from 'react';
import TimeLine from './TimeLine/TimeLine';
import ContentQuiz from './ContentQuiz/ContentQuiz';
import questions from './questions';
import {QuizContext} from '../../../QuizContext'


const Quiz = () => {
  const [order, setOrder] = useState(0);
  


  const nextQuestion = () => {
    setOrder(order + 1);
    if (order >= 6) {
      setOrder(0);
    }
  };

  const question = questions.map((q, i) => {
    return q.questionText;
  });

  const options = questions.map((a, i) => {
    return a.answers.map(a => a.answer);
  });

  return (
    <div>

        <TimeLine questions={questions} order={order} />
        <div>
          <ContentQuiz question={question} nextQuestion={nextQuestion} options={options} order={order} />
        </div>

    </div>
  );
};

export default Quiz;

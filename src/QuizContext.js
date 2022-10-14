import React, {createContext,useState} from 'react';

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [state, setState] = useState({
    groupName: "",
    finished: null,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    time: null,
  }) 
  return(
<QuizContext.Provider value={state}>
    {props.children}
    </QuizContext.Provider>
    )
}
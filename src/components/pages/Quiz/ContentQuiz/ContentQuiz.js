import React, {useState, useContext } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;

  .container {
    max-width: 1140px;
    display: flex;
    flex-direction: columns
    position: relative;
    margin: 0 auto;
    height: 100%;
    padding: 20px;
    border: 1px solid black;
    
    .left-side{
        flex: 50%;

        div {
            height: 100%;
            background #d6e2e6;
        }
    }
    .right-side{
        flex: 50%;
        padding: 0 45px;
        .question {
            font-weight: bolder;
        }
        ul {
            list-style-type: none;
            margin:0;
            padding:0;
            li {
                margin: 20px 0;
                button {
                    text-align: center;
                    padding: 20px;
                    border: none;
                    background: #d6e2e6;
                    border-radius: 25px;
                    &:hover{
                        background: #e6e8e8;
                    }
                }
            }
        }
    }
  }

  .footer {
    max-width: 1140px;
    margin: 0 auto;
    background: #345060;
    display: flex;
    justify-content: flex-end;
    padding: 25px;
  }
`;

const ContentQuiz = props => {


  return (
    <Wrapper>
      <div className="container">
        <div className="left-side">
          {' '}
          <div></div>
        </div>
        <div className="right-side">
          <p>
     
            A patient presenting with laryngeal swelling in the ER. Lore Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also A patient presenting with laryngeal swelling in the ER. Lore Lorem Ipsum is simply dummy
           
          </p>
            <p className="question">{props.question[props.order]}</p>
          <ul>
            {props.options[props.order].map((a,i) => (
              <li key={i}><button>{a}</button></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <button onClick={props.nextQuestion}>next</button>
      </div>
    </Wrapper>
  );
};

export default ContentQuiz;

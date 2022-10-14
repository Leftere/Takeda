import React, {useContext} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  background: ${props => props.theme.yellow};

  .container {
    max-width: 1140px;
    display: flex;
    position: relative;
    height: 100%;
    padding: 20px 0;


  }
`;

const Icon = styled.div`
    display: inline-block;
  width: 40px;
  height: 40px;
  margin-right:20px;
  background: #fff;
  
  border-radius: 50%;
  position: relative;
`;

const Progress = styled.div`
    cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 40px;
  height: 40px;
  margin: 0 20px;
  color:#fff;
  background: #6d6d6d94;
  border-radius: 50%;
  z-index: 2;
  font-weight: bolder;
  position: relative;

  &.active {
      background: #fff;
      color: blue;
  }

  &:after {
    content: "";
    width: 40px;
    height: 2px;
    background: #fff;
    left:-40px;
    top:50%;
    z-index: 1;
    position: absolute;
}
`

const TimeLine = (props) => {

    let order = props.order;


const goToQ = (e) => {
  let position = document.getElementById('position').innerText;

}
  return (
    <Wrapper>
      <div className="container">
     
        <Icon />        
        {props.questions.map((q,i) => {
          if(order + 1 === q.navLabel) {
            return (<Progress className=" active" key={i}>q{q.navLabel}</Progress>)
          } return <Progress id="position"  onClick={goToQ} key={i}>q{q.navLabel}</Progress>
          
        })}
   
      </div>
    </Wrapper>
  );
};

export default TimeLine;

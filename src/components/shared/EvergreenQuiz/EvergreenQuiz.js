import React from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';
import {mediaBreakpointUp} from '../../../utils/responsive';
import Button from '../Button';
import Input from '../Input';
import SectionHeader from '../SectionHeader';
import Dots from './hero-dots.png';
import DotsMobile from './hero-dots-mobile.png';
import logo from './TAKEDA-HAE.png';

const Wrapper = styled.div`
  /* autoprefixer grid: autoplace */
  background-size: 85% auto;
  background-repeat: no-repeat;
  background-position: 100% 100%;

  ${mediaBreakpointUp('sm')} {
    background-image: ${() => `url('${DotsMobile}')`};
    background-position: 80px 100%;
  }

  ${mediaBreakpointUp('lg')} {
    background-image: ${() => `url('${Dots}')`};
    background-position: 110px 0;
    display: grid;
    grid-template-columns: 1fr minmax(380px, 45%);
    -ms-grid-columns: 1fr 30px 40%;
  }

  ${mediaBreakpointUp('xl')} {
    background-position: -100% 0;
    grid-template-columns: auto 50%;
    -ms-grid-columns: 1fr 130px 40%;
  }
`;

const Content = styled.div`
  padding: 20rem 0 12rem;

  img {
    max-width: 300px;
  }

  ${mediaBreakpointUp('sm')} {
    padding: 34rem 0 13rem;
  }

  ${mediaBreakpointUp('md')} {
    padding: 56rem 0 13rem;
  }

  ${mediaBreakpointUp('lg')} {
    margin-left: 50%;
    max-width: 490px;
    padding: 15vw 0;
  }

  h2 {
    margin: 0 0 1rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.42;
    margin: 0 0 4rem;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.8rem;
      line-height: 1.42;
      margin: 0 0 6rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.8rem;
      line-height: 1.55;
      margin: 0 0 4rem;
    }
  }

  p {
    margin: 0 0 3.5rem;
    line-height: 1.75;
  }
`;

const Action = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  min-height: 400px;
  -ms-grid-column: 3;

  ${mediaBreakpointUp('sm')} {
    min-height: 800px;
  }

  &::before {
    background-color: ${props => props.theme.yellow};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    mix-blend-mode: multiply;
    z-index: 0;
    width: 100%;
  }
`;

const Cta = styled.div`
  align-items: center;
  border-radius: 70px;
  display: flex;
  height: 112px;
  justify-content: center;
  position: relative;
  max-width: 100%;
  width: 320px;

  ${mediaBreakpointUp('sm')} {
    width: 484px;
  }

  ${mediaBreakpointUp('lg')} {
    width: 300px;
  }

  ${mediaBreakpointUp('xl')} {
    width: 390px;
  }

  &::before {
    background-color: ${props => props.theme.yellow};
    border-radius: 100px;
    content: ' ';
    height: 100%;
    left: -40px;
    max-width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    width: calc(100% + 80px);
  }

  div {
    align-items: center;
    background-color: #fff;
    border-color: #fff;
    color: rgb(180, 0, 0);
    display: flex;
    font-size: 1.8rem;
    font-weight: 800;
    height: 48px;
    justify-content: center;
    letter-spacing: 0.1em;
    max-width: 100%;
    position: relative;
    width: 100%;
    white-space: nowrap;

    ${mediaBreakpointUp('sm')} {
      font-size: 2.4rem;
    }

    ${mediaBreakpointUp('lg')} {
      font-size: 1.6rem;
    }

    &:hover {
      background-color: transparent;
      color: #fff;
    }
  }
`;

const CtaMark = styled.div`
  height: 77px;
  width: 38.5px;
  border-top-left-radius: 110px;
  border-bottom-left-radius: 110px;
  border: 1px solid #b40000;
  border-right: 0;
  position: absolute;
  left: -20px;
  top: -15px;

  &::before,
  &::after {
    background-color: #b40000;
    border-radius: 50%;
    content: ' ';
    height: 10px;
    left: 38.5px;
    position: absolute;
    width: 10px;
  }

  &::before {
    top: -5px;
  }

  &::after {
    bottom: -5px;
  }

  &:last-child {
    left: auto;
    right: -20px;
    transform: rotate(180deg);
  }
`;

const EvergreenQuiz = ({children, ...props}) => {
  let {groupName, setGroupName} = props;

  return (
    <Wrapper {...props}>
      <Content>
        <img src={logo} />
        {children}
      </Content>
      <Action className="action">
        <Cta>{groupName ? <Redirect to="/quiz" /> : <Input groupName={groupName} setGroupName={setGroupName} />}</Cta>
      </Action>
    </Wrapper>
  );
};

export default EvergreenQuiz;

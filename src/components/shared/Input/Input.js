import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {mediaBreakpointUp} from '../../../utils/responsive';

const Wrapper = styled.div.attrs({
  className: 'input'
})`
  align-items: center;
  background: none;
  border: 1px solid #000;
  border-radius: 2.6em;
  display: inline-flex;
  color: #000;
  cursor: pointer;
  font-family: ${props => props.theme.fontBody};

  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: normal;
  padding-left: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;

  form,
  input {
    border: none;
    width: 100%;
    height: 100%;
    position: relative;
    background: none;
    font-size: 2rem;
  }

  button {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 3px;
    top: 3px;
    border: none;
    border-radius: 50%;
    background: #379f8b;
    &:after {
      content: '';
      width: 19px;
      left: 10px;
      height: 2px;
      position: absolute;
      background: #fff;
    }

    &:before {
      content: '';
      width: 12px;
      height: 12px;
      position: absolute;
      right: 11px;
      top: 15px;
      transform: rotate(45deg);
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
    }
  }
`;

const Input = props => {
  let {groupName, setGroupName} = props;
 
  const onSubmit = e => {
    e.preventDefault();
    let group = document.getElementById('name').value;
    if (group) {
      setGroupName(group);
    }
  };

  return groupName ? (
    <h1>Hi</h1>
  ) : (
    <Wrapper>
    <form onSubmit={onSubmit}>
      <input label="name" id="name" />
      <button type="submit"></button>
    </form>
  </Wrapper>
  );
};

export default Input;

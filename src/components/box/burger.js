import React from 'react'
import styled from 'styled-components'

const Burger = styled.div`
background: transparent;
  margin: 60px auto 40px;
  position: relative;
  height: 30px;
  width: 50px;

  &:before,
  &:after {
    background: #fff;
    backface-visibility: hidden;
    content: "";
    height: 2px;
    left: 0;
    transition: 0.75s;
    width: 50px;
  }

  &:before {
    box-shadow: #fff 0 14px 0 0;
    position: absolute;
    top: 0;
  }

  &:after {
    position: absolute;
    top: calc(100% - 2px);
  }

  &:hover {

    &:before {
      box-shadow: transparent 0 0 0 0;
      top: 50%;
      transform: rotate(225deg);
    }

    &:after {
      top: 50%;
      transform: rotate(315deg);
    }
  }





`




export default Burger
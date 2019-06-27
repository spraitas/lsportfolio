import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  background: #2dc6ad;
  border-radius: 5px;
  box-shadow: rgba(45, 198, 173, 0.9) 1px 13px 19px -6px;
  transition: 0.5s;

  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(45, 198, 173, 0.4);
    transition: 0.5s;
  }

  &:first-child {
    margin-right: 1rem;
    background: #f9f9f9;
    color: #217f70;
    box-shadow: rgb(185, 185, 185) 1px 13px 19px -6px;

    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(45, 198, 173, 0.4);
      transition: 0.5s;
    }

    @media (max-width: 380px) {
        width: 80%;
        margin: 0 auto;
        text-align: center;
      }
  }

  
`

export default Button
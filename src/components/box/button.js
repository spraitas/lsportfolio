
import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import * as palette from "./variables.js"

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`

const Button = styled.div`
  color: ${palette.ls_white};
  text-decoration: none;
  font-size: 15px;
  padding: 8px 30px;
  background: ${palette.ls_main};
  border-radius: 5px;
  box-shadow: rgba(45, 198, 173, 0.9) 1px 13px 19px -6px;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(45, 198, 173, 0.4);
    transition: 0.5s;
    text-decoration: none;

  }

  @media (max-width: 380px) {
    width: 40%;
    margin: 10px;
    text-align: center;
  }

  &:first-child {
    color: ${palette.ls_txt};
    margin-right: 1rem;
    background: ${palette.ls_grey};
    box-shadow: rgb(185, 185, 185) 1px 13px 19px -6px;

    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(45, 198, 173, 0.4);
      transition: 0.5s;
    }

    @media (max-width: 380px) {
        width: 40%;
        margin: 0 auto;
        text-align: center;
    }
  }

`
export default () => (

    <FlexBox>
       <Button as={Link} to="/about">
          About me
        </Button>

        <Button>
          Resume          
        </Button>
    </FlexBox> 

  )
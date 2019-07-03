
import styled from 'styled-components'
import * as palette from "./box/variables.js"


const Button = styled.div`
  color: ${palette.ls_white};
  text-decoration: none;
  padding: 10px 30px;
  background: ${palette.ls_main};
  border-radius: 5px;
  box-shadow: rgba(45, 198, 173, 0.9) 1px 13px 19px -6px;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(45, 198, 173, 0.4);
    transition: 0.5s;
  }

  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
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
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
  }

`
export default Button
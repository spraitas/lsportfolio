import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Container from './box/container'
import Avatar from './box/avatar'

import * as palette from "./variables.js"


const Header = styled.div`
  margin-top: 1px;
  color: ${palette.ls_white};
  padding: 10px 20px;
  background: ${palette.ls_grey};
  box-shadow: rgba(45, 198, 173, 0.9) 1px 3px 11px -6px;
  
  transition: background 1.5s ease;
  z-index:99;
`

const Logo = styled.div`

  transition: 0.5s;
  height: 3.2rem;
  width: 3.2rem;
  margin-bottom: 0;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.9;
    transition: 0.7s;
    transform: rotate(180deg);
  }
`



export default () => {
	
	return (
	
      <Header>
        <Container>
        <Logo>
          <Avatar />
          </Logo>
          </Container>
      </Header>
     
       
        
      
	)
}


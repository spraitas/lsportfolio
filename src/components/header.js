import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Container from './box/container'
import Avatar from './box/avatar'

import * as palette from "./variables.js"

const Header = styled.div`
  margin-top: 1px;
  color: ${palette.ls_white};
  padding: 5px 20px;
  background: ${palette.ls_grey};
  box-shadow: rgba(45, 198, 173, 0.9) 1px 3px 11px -6px;
  
  transition: background 1.5s ease;
  z-index:99;
`
const Logo = styled.div`
  transition: 0.5s;
  height: 3.2rem;
  width: 3.2rem;
  margin-right: 1.5rem;
  
  &:hover {
    opacity: 0.2;
    transition: 0.2s;
    transform: rotate(-360deg);
  }
`
const HeaderTitle = styled.div`
  color: ${palette.ls_main};
  display: flex;
  height: 100%;
  justify-content: left;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
	align-items: center;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`


export default () => (

  <StaticQuery
  query={graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}

  render={data => (
	
      <Header>
        
        <Container>
          <StyledLink to="/">
          <Logo>
          <Avatar />
          </Logo>

          <HeaderTitle>
          <span>{data.site.siteMetadata.title}</span>
          </HeaderTitle>
          </StyledLink>
        </Container>
        
      </Header>
     
     )}
     />
   )

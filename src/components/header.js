import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Container from './box/container'
import Avatar from './box/avatar'

import * as palette from "./box/variables.js"

const Header = styled.div`
  color: ${palette.ls_main};
  background: ${palette.ls_grey};
  box-shadow: rgba(45, 198, 173, 0.9) 1px 3px 11px -6px;
  
  width: 100%;
  height: 85px;
  z-index: -1;
  position: fixed;
  top: 0;
  border: 0;
  will-change: transform;

  @media (max-width: 380px) {
    width: 100%;
    margin: 0 auto;
    text-align: left;
  }

`
const Logo = styled.div`
  transition: 0.5s;
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 1.5rem;
  
  &:hover {
    opacity: 0.2;
    transition: 0.2s;
    transform: rotate(-360deg);
  }
`
const HeaderTitle = styled(Link)`
  color: ${palette.ls_main};
  margin: 11px;
  align-items: center;
  display: flex;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: ${palette.ls_main};
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
        <HeaderTitle to="/">
        <Logo>
        <Avatar />
        </Logo>
        <h3>{data.site.siteMetadata.title}</h3>
        </HeaderTitle>
        </Container>
  
  </Header>


     )}
     />
   )

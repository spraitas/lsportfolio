import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Header from "./header"
import Footer from './footer'
import Container from "./box/container"
import "./layout.css"

import * as palette from "./box/variables.js"



const StyledMain = styled.div`
background: ${palette.ls_grey};
transition: all ease-in-out .15s;

width: 100%;
margin-top: 100px;
margin-bottom: 200px;
z-index: 1;
min-height: 500px;
//position: relative;
//transform: translate3d(0, 0, 0);

border-top: 1px solid rgba(255, 255, 255, .7);
border-bottom: 1px solid rgba(255, 255, 255, .7);

@media (max-width: 380px) {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

`



const Layout = ({ children }) => {
  
  return (
    <>
    <StyledMain>
    
    <Header />
      
    <Container>
      {children}
    </Container>
   
    <Footer />

  </StyledMain>    
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

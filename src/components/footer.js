import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'
import Container from './box/container'


import Avatar from './box/avatar'
import * as palette from "./box/variables.js"

const Footer = styled.div`
  bottom:0; 
  width:100%; 
  position: fixed;
  z-index: -1;
  height: 200px;

 
  text-align: center;
  margin-top: 1px;
  color: ${palette.ls_main};
  background: ${palette.ls_grey};
`



const year = new Date().getFullYear()

const query = graphql`
  query {
      site {
        siteMetadata {
          author {
            name
            email
            url
            
          }
          siteDescription
          siteTitle
          title
        }
      }
    }
 
`

export default () => (
 
  <StaticQuery
  query={query}
  render={data => (
  
  <Footer>
    <h3> {data.site.siteMetadata.siteDescription}</h3> 
    <h4>{data.site.siteMetadata.title}</h4>
    <Avatar />
    
    <p>
    &copy;{year + ' '}
      <a href={data.site.siteMetadata.author.url}> {data.site.siteMetadata.author.name}
      </a>
    </p>
  </Footer>
  )}
  />
)








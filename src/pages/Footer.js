import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'
import Container from '../components/box/container'




const Avatar = styled.div`
img {
  border-radius: 50%;
  overflow: hidden;
}
  
`



const year = new Date().getFullYear()

const query = graphql`
  query {


    avatar: allFile(filter: { name: { eq: "avatar" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 100, height: 100, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }


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
    
    

  <Container>
    <h1> {data.site.siteMetadata.siteDescription}</h1> 
    <h2>{data.site.siteMetadata.title}</h2>
    <Avatar>
    <Img class="avatar" fixed={data.avatar.edges[0].node.childImageSharp.fixed} />
    </Avatar>
   
  
    <p>
    &copy;{year + ' '}
      <a href={data.site.siteMetadata.author.url}> {data.site.siteMetadata.author.name}
      </a>
    </p>

  </Container>
  )}
  />
)








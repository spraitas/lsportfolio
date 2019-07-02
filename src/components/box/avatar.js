import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const Avatar = styled.div`
img {
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
`

const query = graphql`
  query {
    avatar: allFile(filter: { name: { eq: "avatar" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 60, height: 60, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }

    site {
        siteMetadata {
          author {
            url
          }
        }
      }
    }
    
`

export default () => (
  <StaticQuery
  query={query}
  render={data => (
    <Avatar>
    <Img fixed={data.avatar.edges[0].node.childImageSharp.fixed} />
    </Avatar>
    )}
  />
)
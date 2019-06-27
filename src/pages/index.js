import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import * as palette from "../components/variables.js"
import Button from "../components/button"




const Container = styled.div`
  padding: 0px 0px 8px;
  padding-top: 20px;
  background: ${palette.ls_grey};
  align-items: center;
  max-width: 1080px;
  min-height: 200px;
  margin: 3rem auto;


  @media (min-width: 600px) {
    margin: 0px auto;
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`



const IndexPage = () => (
  <Container>
    <Flex>
      <Button as={Link} to="/about">
      About me
      </Button>

      <Button>
      Resume          
      </Button>
    </Flex>
  </Container>
)

export default IndexPage

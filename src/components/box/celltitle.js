import React from 'react'
import styled from 'styled-components'

import * as palette from "./variables.js"

const CellTitleContainer = styled.div`
  display: flex;
`

const Title = styled.div`
  color: ${palette.ls_dark};
  font-size: 21px;
  font-weight: 200;
  padding-bottom: 10px;
  letter-spacing: 0.5px;
  
`

const CellTitle = ({ title }) => {
    return (
      <CellTitleContainer>
        <Title>{title}</Title>
      </CellTitleContainer>
    )
  }
  
  export default CellTitle
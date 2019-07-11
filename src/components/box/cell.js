import React from 'react'
import styled from 'styled-components'

import * as palette from "./variables.js"

const CellContainer = styled.div`
font-weight: 400;
background-color: ${palette.ls_white};
padding: 4px 25px;
border-radius: 8px;
text-align: center;
margin-right: 10px;
margin-bottom: 10px;
letter-spacing: 0.4px;

box-shadow: 0 5px 5px rgba(103, 110, 144, 0.05),
  0 5px 5px rgba(103, 110, 144, 0.09);
`

const Cell = ({ className, text, fontSize, color }) => (
    <CellContainer className={className}>
      <div>{text}</div>
    </CellContainer>
  )
  
  export default Cell
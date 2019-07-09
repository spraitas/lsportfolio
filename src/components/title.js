import React, { Component } from 'react'
import styled from 'styled-components'
import * as palette from "./box/variables.js"

const TitleH1 = styled.h1`
    //text-transform: uppercase;
    color: ${palette.ls_main};
    position: relative;
    padding-bottom: 1px;
    span {
        height: 1px;
        border-radius: 0px;
        background: ${palette.ls_txt};
        position: absolute;
        bottom: 8px;
        left: 0;
        width: 120px;
    }
`

const Title = ({ children }) => {
    return (
        <TitleH1><h1>{children}</h1><span /></TitleH1>
    )
}

export default Title
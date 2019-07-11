import React from 'react'
import styled from 'styled-components'

import SkillData from '../data/skilldata'
import Cell from '../components/box/cell'
import CellTitle from '../components/box/celltitle'
import Title from '../components/title'
import Container from '../components/box/container'

import * as palette from "./box/variables.js"

const Baground = styled.div`
  background-color: ${palette.ls_light};
  clip-path: polygon(0% 7%, 100% 0, 100% 93%, 0 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Box = styled(Container)`
  margin: 0px auto;
  padding: 60px 0px 40px;
`

const Paragraph = styled.div`
  color: ${palette.ls_dark};
  font-size: 16px;
  padding-bottom: 20px;
  line-height: 1.5;
`

const CellContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
`

const StyledCell = styled(Cell)`
  color: ${palette.ls_dark};
  font-size: 14px;
`

const Skills = () => (
  <Baground id="target">
    <Box>
      <Title>Skills</Title>
      <Paragraph>
      Junior front end and web developer with over 20-year experience in layout and graphic design.
Experienced to work in a team and has teambuilding knowledge. Knows how to manage conflicts.
An active follower of new technologies.


      </Paragraph>


      <div>
        {Object.keys(SkillData).map(skill => {
          const skillObject = SkillData[skill]
          return (
            <div key={skillObject.title}>
              <CellTitle title={skillObject.title} />
              <CellContainer>
                {skillObject.skills.map((skill, i) => {
                  return <StyledCell key={i} text={skill} />
                })}
              </CellContainer>
            </div>
          )
        })}
      </div>
    </Box>
  </Baground>
)

export default Skills
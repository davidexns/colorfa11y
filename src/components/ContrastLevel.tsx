import React from 'react'
import styled from 'styled-components'

import ContrastItem from './ContrastItem'

const Container = styled.div`
  flex: 1;
  margin: 8px;
  background: var(--card-background);
  border-radius: 8px;
  border: 1px solid var(--card-border);
  min-width: 360px;
  overflow: hidden;
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--card-border);
  padding: 16px 12px 12px;
`

const HeaderText = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  margin-left: 8px;
`

const Content = styled.div`
  padding: 0px 16px 8px;
`

const ContrastLevel = (props: Props) => {
  const {
    level,
    contrast,
    textMin = 4.5,
    largeTextMin = 3.0,
    graphicalMin = 3.0,
  } = props
  const isPass = contrast >= Math.max(textMin, largeTextMin, graphicalMin)

  return (
    <Container data-testid={`${level}-compliance`}>
      <HeaderContainer isPass={isPass}>
        <HeaderText>{level} Compliance</HeaderText>
      </HeaderContainer>
      <Content>
        <ContrastItem
          label="Normal text"
          contrast={contrast}
          min={textMin}
          subtext={`Greater than ${textMin}`}
        />
        <ContrastItem
          label="Large text"
          contrast={contrast}
          min={largeTextMin}
          subtext={`Greater than ${largeTextMin}`}
        />
        <ContrastItem
          label="Graphical objects"
          contrast={contrast}
          min={graphicalMin}
          subtext={`Greater than ${graphicalMin}`}
        />
      </Content>
    </Container>
  )
}

type Props = {
  contrast: number
  graphicalMin?: number
  largeTextMin?: number
  level: string
  textMin?: number
}

export default ContrastLevel

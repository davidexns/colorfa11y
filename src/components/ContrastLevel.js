import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContrastItem from './ContrastItem'

const Container = styled.div`
  flex: 1;
  margin: 8px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--gray100);
  min-width: 360px;
  overflow: hidden;
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 3px solid
    ${props => `var(--dark-${props.isPass ? 'green' : 'red'})`};

  padding: 4px 12px;

  background: ${props => `var(--light-${props.isPass ? 'green' : 'red'})`};
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

const Svg = styled.svg`
  fill: transparent;
  stroke: ${props => `var(--dark-${props.isPass ? 'green' : 'red'})`};
`

const ContrastLevel = props => {
  const { level, contrast, textMin, largeTextMin, graphicalMin } = props
  const isPass = contrast >= Math.max(textMin, largeTextMin, graphicalMin)

  return (
    <Container data-testid={`${level}-compliance`}>
      <HeaderContainer isPass={isPass}>
        <Svg width="42px" height="42px" viewBox="0 0 20 20" isPass={isPass}>
          <circle cx="10" cy="10" r="8" strokeWidth="1" />
          {isPass ? (
            <path
              d="M5,10.75 l3.75,4 l5.5,-8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M6.25,6.25 l7.5,7.5 M13.75,6.25 l-7.5,7.5"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </Svg>
        <HeaderText>{`Contrast ${
          isPass ? 'is' : 'is not'
        } ${level} compliant`}</HeaderText>
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

ContrastLevel.defaultProps = {
  graphicalMin: 3.0,
  largeTextMin: 3.0,
  textMin: 4.5,
}

ContrastLevel.propTypes = {
  contrast: PropTypes.number.isRequired,
  graphicalMin: PropTypes.number,
  largeTextMin: PropTypes.number,
  level: PropTypes.string.isRequired,
  textMin: PropTypes.number,
}

export default ContrastLevel

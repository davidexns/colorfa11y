import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.section`
  padding: 16px;
  background-color: ${props => props.backgroundColor};
  border: 2px solid var(--gray300);
  border-radius: 8px;
`

const Text = styled.p`
  color: ${props => props.color};
`

const SampleText = ({ foreground, background }) => {
  const foregroundColor = `rgb(${foreground.r}, ${foreground.g}, ${foreground.b})`

  return (
    <Container
      backgroundColor={`rgb(${background.r}, ${background.g}, ${background.b})`}
      data-testid="color-preview"
    >
      <Text color={foregroundColor} css="font-size: 24px;font-weight: 700;">
        Sample large text here
      </Text>
      <Text color={foregroundColor} css="font-size: 16px;">
        Sample smaller text here
      </Text>
      {/* TODO: graphical components */}
    </Container>
  )
}

SampleText.propTypes = {
  background: PropTypes.shape({
    b: PropTypes.number,
    g: PropTypes.number,
    r: PropTypes.number,
  }),
  foreground: PropTypes.shape({
    b: PropTypes.number,
    g: PropTypes.number,
    r: PropTypes.number,
  }),
}

export default SampleText

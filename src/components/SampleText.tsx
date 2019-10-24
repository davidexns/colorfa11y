import React from 'react'
import styled from 'styled-components'

const Container = styled.section<{ backgroundColor: string }>`
  padding: 16px;
  background: ${props => props.backgroundColor};
  border: 2px solid var(--preview-border);
  border-radius: 8px;
`

const Text = styled.p<{ color: string }>`
  color: ${props => props.color};
`

const SampleText = ({ foreground, background }: Props) => {
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

type Props = {
  background: Rgb
  foreground: Rgb
}

export default SampleText
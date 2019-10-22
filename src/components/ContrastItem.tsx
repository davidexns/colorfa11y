import React from 'react'
import styled from 'styled-components'

import Row from './Row'
import ContrastStatus from './ContrastStatus'

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Label = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: var(--primary-text);
`

const Subtext = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: var(--supplemental-text);
`

const ContrastItem = ({ label, subtext, contrast, min }: Props) => (
  <Row css="align-items: center;margin: 8px 0;">
    <LabelContainer>
      <Label>{label}</Label>
      {subtext && <Subtext data-testid="contrast-subtext">{subtext}</Subtext>}
    </LabelContainer>
    <ContrastStatus isPass={contrast >= min} />
  </Row>
)

type Props = {
  contrast: number
  label: string
  min: number
  subtext?: string
}

export default ContrastItem

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextContrastIndicator from './TextContrastIndicator'
import GraphicalContrastIndicator from './GraphicalContrastIndicator'
import Row from './Row'

const ItemRow = styled(Row)`
  align-items: center;
  margin: 8px 0;

  :not(:last-child) {
    margin-right: 16px;
  }
`

const Label = styled.p`
  color: var(--gray600);
  font-size: 18px;
  padding-right: 16px;
  margin: 0;
`

const ContrastItem = ({ contrast, label, isLarge, isText }) => {
  return (
    <ItemRow>
      <Label>{label}</Label>
      {isText ? (
        <TextContrastIndicator contrast={contrast} isLarge={isLarge} />
      ) : (
        <GraphicalContrastIndicator contrast={contrast} />
      )}
    </ItemRow>
  )
}

ContrastItem.defaultProps = {
  isLarge: false,
  isText: true,
}

ContrastItem.propTypes = {
  contrast: PropTypes.number.isRequired,
  isLarge: PropTypes.bool,
  isText: PropTypes.bool,
  label: PropTypes.string.isRequired,
}

export default ContrastItem

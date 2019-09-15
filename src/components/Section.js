import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  text-align: center;
  margin-bottom: 16px;

  :before {
    content: '';
    width: 100%;
    border-bottom: solid 1px var(--gray200);
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
  }
`

const HeaderText = styled.h2`
  display: inline-block;
  position: relative;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  color: var(--gray600);
  background-color: var(--page-background);
  margin: 0;
  padding: 0 12px;
  z-index: 2;
`

const Section = ({ children, header }) => (
  <section css="margin-bottom: 32px;">
    <Header>
      <HeaderText>{header}</HeaderText>
    </Header>
    {children}
  </section>
)

Section.propTypes = {
  header: PropTypes.string.isRequired,
}

export default Section

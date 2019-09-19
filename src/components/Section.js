import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  text-align: center;
  margin-bottom: 16px;
`

const HeaderText = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  color: ${props => props.theme.sectionHeaderText};
  margin: 0;
  :before,
  :after {
    content: '';
    border-top: 1px solid ${props => props.theme.kebabBorder};
    flex: 1;
    margin: 0 12px 0 0;
  }
  :after {
    margin: 0 0 0 12px;
  }
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

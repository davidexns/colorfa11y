import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../assets/colorfa11y-logo.svg'

const StyledHeader = styled.header`
  height: 50px;
  background: var(--header-background);
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
`

const SiteTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin: 5px 0 0;
`

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    padding: 0 8px;
  }

  a + a {
    margin-left: 48px;
  }
`

const Header = () => (
  <StyledHeader>
    <Container>
      <SiteTitle>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo height="40px" width="123px" aria-hidden="true" />
        </Link>
      </SiteTitle>
      <NavLinks>
        <Link to="/about">About</Link>
        <Link to="/contribute">Contribute</Link>
      </NavLinks>
    </Container>
  </StyledHeader>
)

export default Header

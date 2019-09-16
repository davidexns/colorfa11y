import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './Header'
import { defaultTheme, darkTheme } from '../styles/theme'
import '../styles/layout.css'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.primaryText};
    background: ${props => props.theme.bodyBackground};
  }

  a {
    color: ${props => props.theme.linkColor};
  }
`

const ThemeToggle = styled.button`
  position: fixed;
  right: 8px;
  bottom: 8px;
  margin: 0;
  border: none;
  color: ${props => props.theme.primaryText};
  background: ${props => props.theme.themeButtonBackground};
  padding: 4px 8px;
  border-radius: 4px;
`

const Layout = ({ children }) => {
  const [isDarkTheme, toggleTheme] = useState(
    localStorage.getItem('isDarkTheme')
  )
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 992,
            padding: `0px 16px 24px`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
        <ThemeToggle onClick={() => toggleTheme(prev => !prev)}>
          Go {isDarkTheme ? 'Light' : 'Dark'}
        </ThemeToggle>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

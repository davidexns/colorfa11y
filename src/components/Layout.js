import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './Header'
import theme from '../styles/theme'
import '../styles/layout.css'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.primaryText};
    background-color: ${props => props.theme.bodyBackground};
    transition: background-color 100ms ease-out, color 100ms ease-out;
  }

  a {
    color: ${props => props.theme.linkColor};
  }
`

const ThemeToggle = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  margin: 0;
  border: none;
  color: ${props => props.theme.primaryText};
  background: ${props => props.theme.themeButtonBackground};
  padding: 4px 8px;
  border-radius: 4px;
`

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    selectedTheme: 'light',
  }

  componentDidMount() {
    this.setState({ selectedTheme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ selectedTheme: window.__theme })
    }
  }

  toggleTheme = () => {
    window.__setPreferredTheme(
      this.state.selectedTheme === 'light' ? 'dark' : 'light'
    )
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
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
                <main css="display: flex;flex-direction: column;">
                  {this.props.children}
                </main>
                <footer>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
              </div>
              <ThemeToggle onClick={this.toggleTheme}>
                Go {this.state.selectedTheme === 'dark' ? 'Light' : 'Dark'}
              </ThemeToggle>
              <GlobalStyle />
            </>
          )}
        />
      </ThemeProvider>
    )
  }
}

export default Layout

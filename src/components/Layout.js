import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
import '../styles/layout.css'

const GlobalStyle = createGlobalStyle`
  body {
    color: var(--primary-text);
    background-color: var(--body-background);
    transition: background-color 100ms ease-out, color 100ms ease-out;
  }
  a {
    color: var(--link-color);
  }
`

const ThemeToggle = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  margin: 0;
  border: none;
  color: var(--primary-text);
  background: var(--theme-button-background);
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
    )
  }
}

export default Layout

import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Section from '../components/Section'

const ContributePage = () => (
  <Layout>
    <SEO title="Contribute" />
    <Section header="How to contribute to Colorfa11y">
      <p>
        The source code for Colorfa11y is available on{' '}
        <a href="https://github.com/davidexns/colorfa11y">GitHub</a> and PRs are
        welcome! If there is a feature you would like to see added, please
        submit an issue or a pull request.
      </p>
      <p>Some features that I would like to add at some point:</p>
      <ul>
        <li>A better logo</li>
        <li>
          Improve descriptiveness and accessibility of contrast test indicators
        </li>
        <li>Example graphical objects in the Preview section</li>
        <li>
          One-click copy css property to clipboard (ex:{' '}
          <code>color: hsl(268, 14%, 28%);</code>)
        </li>
        <li>Dark mode!</li>
        <li>
          Save a list of a user&apos;s recent (or favorite) colors in local
          storage
        </li>
        <li>Detection and warning of common colorblind issues</li>
        <li>
          Contrast calculation for CSS string colors (ex: palevioletred,
          peachpuff)
        </li>
      </ul>
    </Section>
  </Layout>
)

export default ContributePage

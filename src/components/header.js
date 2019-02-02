import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/logo.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 0;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 0.5rem;
`

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            src={Logo}
            alt="Level Up Tutorials"
            width="100px"
            style={{ marginBottom: 0 }}
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

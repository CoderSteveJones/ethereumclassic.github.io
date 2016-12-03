import React, { Component, PropTypes } from 'react'
import { prefixLink } from 'gatsby-helpers'

import Container from 'muicss/lib/react/container'
import Col from 'muicss/lib/react/col'

import IconDecentralised from 'react-icons/lib/ti/arrow-maximise'
import IconFinality from 'react-icons/lib/ti/link'

import ContentBlock from '../content-block'
import IconPanel from '../icon-panel'

import whyClassic from '../../contents/why/why-classic.md'
import decentralizedGovernance from '../../contents/why/decentralized-governance.md'
import codeIsLaw from '../../contents/why/code-is-law.md'


export default class WhyClassic extends Component {
  render () {
    return (
      <Container className="padded">
        <Col md="4" >
          <div dangerouslySetInnerHTML={{ __html: whyClassic.body }} />
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={prefixLink('/blog/2016-07-11-manifesto/')}
            target="_blank"
          >
            Crypto-Decentralist Manifesto
          </a>
          <br />
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={prefixLink('/assets/ETC_Declaration_of_Independence.pdf')}
            target="_blank"
          >
            Declaration of Independence
          </a>
          <br />
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={prefixLink('/assets/Ethereum_Classic_-_The_New_Original_Innovator.pdf')}
            target="_blank"
          >
            Products & Services Roadmap
          </a>
          <br />
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={'http://us14.campaign-archive1.com/home/?u=1e7b1574ce5b6f380df5f8510&id=16de44cd42'}
            target="_blank"
          >
            Ethereum Classic Newsletter
          </a>
          <br />
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={'https://www.reddit.com/r/EthereumClassic/comments/5cm582/monetary_policy_update/'}
            target="_blank"
          >
            Monetary Policy Workshop
          </a>
          <br />
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={'https://steemit.com/@cseberino'}
            target="_blank"
          >
            ETC Education Initiative
          </a>
          <br /><br />
        </Col>
        <Col md="8">
          <IconPanel Icon={IconFinality} >
            <ContentBlock body={codeIsLaw} />
          </IconPanel>
          <IconPanel Icon={IconDecentralised} >
            <ContentBlock body={decentralizedGovernance} />
          </IconPanel>
        </Col>
      </Container>
    )
  }
}

WhyClassic.contextTypes = {
  blogPosts: PropTypes.array.isRequired,
}

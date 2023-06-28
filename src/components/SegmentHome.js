import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class SegmentHome extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How should I prepare my house before selling it?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          First impressions matter in business, but especially in real estate. Anyone walking through a house or touring it virtually will be looking for ways to pass or negotiate down on the price. You must help clients make sure that the HVAC, plumbing, and electrical system all work properly. Each room should look clean and decluttered with no overt damage insight.


          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Should I order a home inspection?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          Getting a pre-sale home inspected is never a bad idea, especially to get your client the best price for their home. Some homebuyers will feel uncomfortable purchasing a house without seeing a home inspection. Many will often hire their own inspector. It’s better to be safe than sorry.


          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How long will it take to sell my home?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          Once the house is on the market, it may take anywhere from four to six weeks to sell. However, if the market is fairly hot, a seller could see their house off the market within a week. On the flip side, if there is a lull in the market or issues arise such as negotiation, lack of exposure, or house conditions then the property can sit on the market for months.


          </p>
          <p>
          An experienced listing agent should be able to recommend other real estate professionals often found in the industry. These professionals might consist of an attorney who practices in real estate, a mortgage advisor, general contractor or handyman, moving companies, professional home stagers, and cleaning services. Part of being in the real estate industry means using your vast network to assist your clients.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
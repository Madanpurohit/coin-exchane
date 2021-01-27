import React, { Component } from 'react'
import propTypes from 'prop-types';
import styled from 'styled-components'
const Section=styled.section`
    border:solid red 2px;
    font-size:2rem;
`;
export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
              $Balance:{this.props.ammount}  
            </Section>
        )
    }
}
AccountBalance.propTypes={
    ammount:propTypes.number
}

import React, { Component } from 'react'
import propTypes from 'prop-types';
import styled from 'styled-components'
const Section=styled.section`
    border:solid red 2px;
    font-size:2rem;
`;
export default class AccountBalance extends Component {
    render() {
        const buttonText=this.props.showBalance?'Hide Balance':'Show Balance';
        var content=null;
        console.log(this.props.showBalance);
        if(this.props.showBalance){
            content=<>$Balance:{this.props.ammount}</>  
        }
        return (
            <Section>
              {content}
              <button onClick={this.props.balanceVisibilityChange}>{buttonText}</button>  
            </Section>
        )
    }
}
AccountBalance.propTypes={
    ammount:propTypes.number
}

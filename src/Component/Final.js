import React, { Component } from 'react';
import '../App.css';
import { getRandomColor } from '../Helper/utils';

class Final extends Component {

  isWinning() {
    const { tickets, winningNumber } = this.props;

    for ( const ticket of tickets){
      if (ticket.number === winningNumber) {
        return true;
      }
    }

    return false;
  }
     
  renderWinning() {
    return (
      <>
        <h2>ЧЕСТИТО!!!</h2>
        <h3>Ти спечели 1 милион лева!</h3>
        <p>Твоето печелившо число беше: <b>{this.props.winningNumber}</b></p>
      </>
    );
  }

  renderTryAgain() {
    return (
      <>
        <h2>Опитай пак</h2>
        <p>Твоето число беше: <b>{this.props.winningNumber}</b></p>
      </>
    );
  }

  render() {

    return (
      <div className='Final-box' style={{ background: getRandomColor()}}>
        {this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
        <button onClick={this.props.actions.reset}>НОВО ТЕГЛЕНЕ</button>
      </div>
    );
  
  }

};

export default Final;

// react moduls - css прегледай какво представлява
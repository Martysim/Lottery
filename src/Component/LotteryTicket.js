import React, { Component } from 'react';

class LotteryTicket extends Component {
  render() {
    const { actions, index, number, color } = this.props;

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: color,
        padding: 5,
        width: '60vw',
        margin: 'auto'
      }}
      >
        <button
          style={{ textAlign: 'left' }}
          onClick={() => { actions.removeTicket(index)}}
        >
          X
        </button>  
        <small> Това билетче има числото: <span style={{width: '10px', fontWeight: 'bold' }}>{ number }</span></small>
      </div>
    );
  
  }

};

export default LotteryTicket;


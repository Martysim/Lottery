import React, { Component } from 'react';
import '../App.css';


class LotteryTicket extends Component {
  render() {
    const { actions, index, number, color } = this.props;

    return (
      <div className='LT-box-ticket' style={{ backgroundColor: color, }}>
        
        <button className='LT-button'
          onClick={() => { actions.removeTicket(index)}}
        >
          X
        </button>  
        <small> Това билетче има числото: <span className='LT-numTicket'>{ number }</span></small>
      </div>
    );
  }
};

export default LotteryTicket;


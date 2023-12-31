import React, { Component } from 'react';

import LotteryTicket from './LotteryTicket';

class Lottery  extends Component {
  
  renderButton() {
    const { remainingTickets , actions } = this.props;

    if (this.props.remainingTickets > 0) {
      return <button onClick={ actions.registerTicket }>Купи Билет</button>; 
    }
    
    return <button onClick={ actions.finish }>ПРОВЕРИ ЗА ПЕЧАЛБА</button>; 
  }
  
  renderTickets() {
    const { tickets, actions } = this.props;
    const lotteryTicketActions = { removeTicket: actions.removeTicket };

    const LotteryTickets = tickets.map((ticket, index) => {
      return (
        <LotteryTicket
          actions={ lotteryTicketActions }
          color={ticket.color}
          number={ticket.number}
          index={index}
          key={index}
        />
      )
    });

    return LotteryTickets;
  }
  
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Лотария</h2>
        { this.renderButton() }
        <br />
        <small>оставащи: { this.props.remainingTickets }</small>
        <br />
        <hr />
        { this.renderTickets() }
      
      </div>
    );
  }

};

export default Lottery;

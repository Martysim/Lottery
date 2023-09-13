import { getRandomColor, getRandomNumber } from './utils';


export function registerTicket() {
	const newTicket	= {
		number	: getRandomNumber(),
		color	: getRandomColor()
	};

	this.setState( ( prevState ) => {

		return {
			tickets				: [...prevState.tickets, newTicket],
			remainingTickets	: -- prevState.remainingTickets
		}
	} );

}

export function removeTicket( index ) {
    this.setState((prevState) => {
        const updatedTickets = [...prevState.tickets];
        updatedTickets.splice(index, 1);

        return {
            tickets: updatedTickets,
            remainingTickets: ++prevState.remainingTickets
        }
    } );
}


export function finish() {
    this.setState( { finished: true } );
};


export function reset() {
    this.setState({
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false
    });    
}
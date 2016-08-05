export function updateName(name) {
	return {
		type: 'UPDATE_NAME',
		name,
	}
}

export function updateAccountNumber(number) {
	return {
		type: 'UPDATE_ACCOUNT_NUMBER',
		number,
	}
}

export function updateComposeMessage(message) {
	return {
		type: 'UPDATE_COMPOSE_MESSAGE',
		message,
	}
}

export function sendMessage(timestamp) {
	return (dispatch, getState) => {
		const message = {
			message: getState().composingMessage,
			timestamp,
			customerName: getState().name,
			accountNumber: getState().accountNumber,
		}

		dispatch({
			type: 'SEND_MESSAGE',
			...message,
		})

		fetch('http://localhost:8080/messages', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(message),
		})
	}
}
